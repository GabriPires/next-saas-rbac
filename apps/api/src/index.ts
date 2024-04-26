import { ability } from '@saas/auth'

const userCanInviteSomeoneElse = ability.can('delete', 'User')

console.log(userCanInviteSomeoneElse)
