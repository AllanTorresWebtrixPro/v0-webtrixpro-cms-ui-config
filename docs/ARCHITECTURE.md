# WebtrixPro CMS - Layered Architecture

## Overview

This application follows a strict **layered architecture** pattern as defined in the project guidelines. The architecture ensures separation of concerns, maintainability, and scalability.

## Architecture Layers

\`\`\`
┌─────────────────────────────────────────────────────────┐
│                    Screen Layer                         │
│              /app/[feature]/page.tsx                    │
│         (Next.js App Router - Server Component)         │
└────────────────────┬──────────────────────────────────┘
                     │
┌────────────────────▼──────────────────────────────────┐
│                 Component Layer                       │
│          /components/[feature]/[Component].tsx        │
│              (React UI Components)                     │
└────────────────────┬──────────────────────────────────┘
                     │
┌────────────────────▼──────────────────────────────────┐
│                   Hook Layer                           │
│            /hooks/use-[feature].ts                     │
│      (Business Logic, TanStack Query Integration)      │
└────────────────────┬──────────────────────────────────┘
                     │
┌────────────────────▼──────────────────────────────────┐
│                 Service Layer                         │
│    /lib/services/[feature]/[Feature]Service.ts       │
│         (API Orchestration, BaseService)              │
└────────────────────┬──────────────────────────────────┘
                     │
┌────────────────────▼──────────────────────────────────┐
│                Endpoint Layer                         │
│        /app/api/v1/[feature]/route.ts                │
│          (Next.js API Routes, Validation)             │
└────────────────────┬──────────────────────────────────┘
                     │
┌────────────────────▼──────────────────────────────────┐
│                  Data Layer                            │
│            PostgreSQL (Raw SQL Queries)               │
└────────────────────────────────────────────────────────┘
\`\`\`

## Implemented Components

### 1. Infrastructure Layer

#### Centralized Logger (`lib/logger.ts`)
- **Purpose**: Single source of truth for all logging
- **Usage**: Replace all `console.log` with `logger.debug/info/warn/error`
- **Environment-aware**: Only logs debug messages in development

\`\`\`typescript
import { logger } from '@/lib/logger';

logger.debug('[ComponentName] Debug message');
logger.info('[ComponentName] Info message');
logger.warn('[ComponentName] Warning message');
logger.error('[ComponentName] Error message');
\`\`\`

#### Custom Fetch (`lib/custom-fetch.ts`)
- **Purpose**: Centralized HTTP client with error handling
- **Features**: 
  - Timeout handling
  - Error transformation
  - Request/response logging
  - Type-safe responses

#### Query Keys (`lib/query-keys.ts`)
- **Purpose**: Hierarchical query key structure for TanStack Query
- **Pattern**: `feature.all → feature.lists → feature.list → feature.details → feature.detail`

\`\`\`typescript
export const queryKeys = {
  contacts: {
    all: ['contacts'] as const,
    lists: () => [...queryKeys.contacts.all, 'list'] as const,
    list: (filters?: string) => [...queryKeys.contacts.lists(), { filters }] as const,
    details: () => [...queryKeys.contacts.all, 'detail'] as const,
    detail: (id: string) => [...queryKeys.contacts.details(), id] as const,
  },
};
\`\`\`

### 2. Service Layer

#### Base Service (`lib/services/base/BaseService.ts`)
- **Purpose**: Abstract base class providing CRUD operations
- **Pattern**: All services extend BaseService
- **Methods**: `list()`, `get(id)`, `create(data)`, `update(id, data)`, `delete(id)`

#### Contact Service (`lib/services/contacts/ContactService.ts`)
- **Extends**: BaseService
- **Additional Methods**: `getByEmail()`, `getByStatus()`
- **Usage**: Always use through singleton instance

\`\`\`typescript
import { contactService } from '@/lib/services';

const contacts = await contactService.list();
const contact = await contactService.get(id);
\`\`\`

#### Newsletter Service (`lib/services/newsletter/NewsletterService.ts`)
- **Extends**: BaseService
- **Additional Methods**: `subscribe()`, `unsubscribe()`

### 3. Hook Layer

#### Global Error Handler (`hooks/use-global-error-handler.ts`)
- **Purpose**: Centralized error handling with toast notifications
- **Methods**:
  - `handleFetchError()` - For query errors
  - `handleCrudError()` - For mutation errors
  - `handleCrudSuccess()` - For successful mutations

#### Feature Hooks
- **`use-contacts.ts`**: Contact CRUD operations
- **`use-newsletter.ts`**: Newsletter subscription operations

**Pattern:**
\`\`\`typescript
export function useContacts() {
  const { handleFetchError, handleCrudError, handleCrudSuccess } = useGlobalErrorHandler();
  const queryClient = useQueryClient();

  const query = useQuery({
    queryKey: queryKeys.contacts.list(),
    queryFn: async () => {
      try {
        return await contactService.list();
      } catch (error) {
        handleFetchError(error, 'contacts');
        throw error;
      }
    },
  });

  // ... mutations with error handling
}
\`\`\`

### 4. Component Layer

#### Shared Components
- **LoadingSpinner**: Reusable loading indicator
- **EmptyState**: Reusable empty state display
- **ErrorState**: Reusable error display with retry option

#### Feature Components
- **ContactForm**: Form with React Hook Form + Zod validation
- **ContactInfo**: Contact information display

### 5. Type Layer

#### Type Definitions (`types/[feature]/[feature].types.ts`)
\`\`\`typescript
export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  // ...
}

export interface CreateContactInput { /* ... */ }
export interface UpdateContactInput { /* ... */ }
\`\`\`

#### Zod Schemas (`types/[feature]/[feature].schemas.ts`)
\`\`\`typescript
export const createContactSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  // ...
});

export type CreateContactInput = z.infer<typeof createContactSchema>;
\`\`\`

### 6. Provider Layer

#### Query Provider (`lib/providers/QueryProvider.tsx`)
- **Purpose**: TanStack Query configuration
- **Config**:
  - 1 minute stale time
  - No refetch on window focus
  - 1 retry attempt

## Data Flow Example: Contact Form Submission

1. **User fills form** → ContactForm component
2. **Form validation** → React Hook Form + Zod schema
3. **Submit handler** → Calls `createMutation.mutateAsync(data)`
4. **Hook layer** → `useContacts()` hook handles mutation
5. **Service layer** → `contactService.create(data)` orchestrates API call
6. **Custom fetch** → Makes HTTP POST to `/api/v1/contacts`
7. **API endpoint** → (To be implemented) Validates and saves to database
8. **Success handler** → `handleCrudSuccess()` shows toast notification
9. **Cache invalidation** → Query client invalidates contacts list
10. **UI update** → Components re-render with fresh data

## Best Practices

### ✅ DO

- Use centralized logger instead of console.*
- Extend BaseService for all services
- Use useGlobalErrorHandler in all hooks
- Follow query key hierarchy
- Invalidate queries after mutations
- Use TypeScript interfaces for all props
- Use Zod schemas for validation

### ❌ DON'T

- Don't use console.log/error/warn directly
- Don't call customFetch directly in hooks (use services)
- Don't create services without extending BaseService
- Don't skip error handling
- Don't use `any` types
- Don't duplicate code across modules

## Next Steps for Full Implementation

1. **Database Setup**: Configure PostgreSQL connection
2. **API Endpoints**: Implement `/app/api/v1/contacts/route.ts`
3. **Authentication**: Integrate Auth0 for protected routes
4. **Middleware**: Add rate limiting and validation
5. **Testing**: Add unit and E2E tests
6. **Documentation**: API documentation for endpoints

## File Structure

\`\`\`
/app/
  /contact/
    page.tsx                          # Screen layer
  /api/v1/contacts/
    route.ts                          # API endpoints (to be added)

/components/
  /contact/
    ContactForm.tsx                   # Feature component
    ContactInfo.tsx                   # Feature component
  /shared/
    LoadingSpinner.tsx               # Shared component
    EmptyState.tsx                   # Shared component
    ErrorState.tsx                   # Shared component

/hooks/
  use-contacts.ts                     # Hook layer
  use-newsletter.ts                   # Hook layer
  use-global-error-handler.ts         # Global hook

/lib/
  /services/
    /base/
      BaseService.ts                  # Base service class
    /contacts/
      ContactService.ts               # Contact service
    /newsletter/
      NewsletterService.ts            # Newsletter service
    index.ts                          # Service exports
  /providers/
    QueryProvider.tsx                 # TanStack Query provider
  logger.ts                           # Centralized logger
  custom-fetch.ts                     # HTTP client
  query-keys.ts                       # Query key hierarchy

/types/
  /contact/
    contact.types.ts                  # Type definitions
    contact.schemas.ts                # Zod schemas
  /newsletter/
    newsletter.types.ts               # Type definitions
    newsletter.schemas.ts             # Zod schemas
\`\`\`

## References

- **Architecture Guide**: `user_read_only_context/text_attachments/layered-architecture-implementation-cIAZQ.md`
- **Frontend Rules**: `user_read_only_context/text_attachments/frontend-rules-VxBMC.md`
- **Backend Rules**: `user_read_only_context/text_attachments/backend-rules-fJARZ.md`
- **Project-Wide Rules**: `user_read_only_context/text_attachments/project-wide-rules-tZFuW.md`
