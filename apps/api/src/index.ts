import { defineAbilityFor, projectSchema } from '@saas/auth'

const ability = defineAbilityFor({
  id: 'owner-id',
  role: 'MEMBER',
})

const project = projectSchema.parse({
  id: 'project-id',
  ownerId: 'owner-id',
})

console.log(ability.can('get', 'Billing'))
console.log(ability.can('create', 'Invite'))
console.log(ability.can('delete', project))
