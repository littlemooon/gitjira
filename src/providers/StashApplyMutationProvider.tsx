import React, { ReactNode } from 'react'
import GitRouter from '../components/GitRouter'
import useGitMutation from '../hooks/useGitMutation'
import useInit from '../hooks/useInit'
import { mutations } from '../lib/mutations'

export default function StashApplyMutationProvider({
  children,
}: {
  children: ReactNode
}) {
  const stashApplyMutation = useGitMutation(mutations.stashApply, undefined)

  useInit(stashApplyMutation.run)

  return <GitRouter response={stashApplyMutation}>{children}</GitRouter>
}
