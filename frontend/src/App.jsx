import { SignInButton, Show, UserButton, SignOutButton } from '@clerk/react'

function App() {
  return (
    <>
      <h1>Welcome to the Interview Portal</h1>
      <Show when="signed-out">
        <SignInButton mode="modal" />
      </Show>
      <Show when="signed-in">
        <SignOutButton />
      </Show>
      <UserButton />
    </>
  )
}

export default App
