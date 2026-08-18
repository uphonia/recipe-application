import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { SignUp } from './SignUp';
import { HOME } from '../../common/consts/navigation.consts';
import { mockPush } from '../../jest-setup';

function setup() {
  return {
    user: userEvent.setup(),
    ...render(<SignUp />),
  };
}

describe('Sign Up form', () => {
    test('Is empty', async () => {
        render(<SignUp />)
        expect(screen.getByTestId('signup-username')).toHaveValue('')
        expect(screen.getByTestId('signup-password')).toHaveValue('')
        expect(screen.getByTestId('signup-passwordConfirm')).toHaveValue('')
    })
})

describe('Check for valid username', () => {
    test('Short username', async () => {
        const { user } = setup()
        const username = screen.getByTestId('signup-username')
        const submitButton = screen.getByRole('button', { name: /Sign Up/i})

        fireEvent.change(username, { target: { value: 'asd'}})
        await user.click(submitButton)
        expect(screen.getByTestId('error-username')).toHaveTextContent('Username must be at least 4 characters')
    })

    test('Numerical username', async () => {
        const { user } = setup()
        const username = screen.getByTestId('signup-username')
        const submitButton = screen.getByRole('button', { name: /Sign Up/i})

        fireEvent.change(username, { target: { value: '1111'}})
        await user.click(submitButton)
        expect(screen.getByTestId('error-username')).toHaveTextContent('Username cannot be all numbers')
    })

    test('Username with special characters', async () => {
        const { user } = setup()
        const username = screen.getByTestId('signup-username')
        const submitButton = screen.getByRole('button', { name: /Sign Up/i})

        fireEvent.change(username, { target: { value: '11@@'}})
        await user.click(submitButton)
        expect(screen.getByTestId('error-username')).toHaveTextContent('Username can only contain letters and numbers')
    })

    test('Valid username', async () => {
        const { user } = setup()
        const username = screen.getByTestId('signup-username')
        const submitButton = screen.getByRole('button', { name: /Sign Up/i})

        fireEvent.change(username, { target: { value: '11aa'}})
        await user.click(submitButton)
        expect(screen.queryByTestId('error-username')).toBeNull()
    })
})

describe('Check for valid password and confirmed password', () => {
    test('Short password', async () => {
        const { user } = setup()
        const password = screen.getByTestId('signup-password')
        const submitButton = screen.getByRole('button', { name: /Sign Up/i})

        fireEvent.change(password, { target: { value: '1234567'}})
        await user.click(submitButton)
        expect(screen.getByTestId('error-password')).toHaveTextContent('Password must be at least 8 characters')
    })

    test('Password with no lowercase letter', async () => {
        const { user } = setup()
        const password = screen.getByTestId('signup-password')
        const submitButton = screen.getByRole('button', { name: /Sign Up/i})

        fireEvent.change(password, { target: { value: 'AAAAAAAA'}})
        await user.click(submitButton)
        expect(screen.getByTestId('error-password')).toHaveTextContent('Must contain one lowercase letter')
    })

    test('Password with no uppercase letter', async () => {
        const { user } = setup()
        const password = screen.getByTestId('signup-password')
        const submitButton = screen.getByRole('button', { name: /Sign Up/i})

        fireEvent.change(password, { target: { value: 'aaaaaaaa'}})
        await user.click(submitButton)
        expect(screen.getByTestId('error-password')).toHaveTextContent('Must contain one uppercase letter')
    })

    test('Password with no number', async () => {
        const { user } = setup()
        const password = screen.getByTestId('signup-password')
        const submitButton = screen.getByRole('button', { name: /Sign Up/i})

        fireEvent.change(password, { target: { value: 'aaaaaaaA'}})
        await user.click(submitButton)
        expect(screen.getByTestId('error-password')).toHaveTextContent('Must contain one number')
    })

    test('Password with no special character', async () => {
        const { user } = setup()
        const password = screen.getByTestId('signup-password')
        const submitButton = screen.getByRole('button', { name: /Sign Up/i})

        fireEvent.change(password, { target: { value: 'aaaaaaaA1'}})
        await user.click(submitButton)
        expect(screen.getByTestId('error-password')).toHaveTextContent('Must contain one special character')
    })

    test('No password confirmed', async () => {
        const { user } = setup()
        const password = screen.getByTestId('signup-password')
        const passwordConfirm = screen.getByTestId('signup-passwordConfirm')
        const submitButton = screen.getByRole('button', { name: /Sign Up/i})

        fireEvent.change(password, { target: { value: 'aaaaaaaA1$'}})
        await user.click(submitButton)
        expect(screen.getByTestId('error-passwordConfirm')).toHaveTextContent('Please confirm your password')
    })

    test('Passwords do not match', async () => {
        const { user } = setup()
        const password = screen.getByTestId('signup-password')
        const passwordConfirm = screen.getByTestId('signup-passwordConfirm')
        const submitButton = screen.getByRole('button', { name: /Sign Up/i})

        fireEvent.change(password, { target: { value: 'aaaaaaaA1$'}})
        fireEvent.change(passwordConfirm, { target: { value: 'aaaaaaaA1$2'}})
        await user.click(submitButton)
        expect(screen.getByTestId('error-passwordConfirm')).toHaveTextContent('Passwords must match')
    })

    test('Passwords match', async () => {
        const { user } = setup()
        const password = screen.getByTestId('signup-password')
        const passwordConfirm = screen.getByTestId('signup-passwordConfirm')
        const submitButton = screen.getByRole('button', { name: /Sign Up/i})

        fireEvent.change(password, { target: { value: 'aaaaaaaA1$'}})
        fireEvent.change(passwordConfirm, { target: { value: 'aaaaaaaA1$'}})
        await user.click(submitButton)
        expect(screen.queryByTestId('error-password')).toBeNull()
        expect(screen.queryByTestId('error-passwordConfirm')).toBeNull()
    })
})

const mockPush = jest.fn();
describe('Sign Up form', () => {
    test('Is complete', async () => {
        const { user } = setup()
        const username = screen.getByTestId('signup-username')
        const password = screen.getByTestId('signup-password')
        const passwordConfirm = screen.getByTestId('signup-passwordConfirm')
        const submitButton = screen.getByRole('button', { name: /Sign Up/i})

        fireEvent.change(username, { target: { value: 'test1'}})
        fireEvent.change(password, { target: { value: 'aaaaaaaA1$'}})
        fireEvent.change(passwordConfirm, { target: { value: 'aaaaaaaA1$'}})
        await user.click(submitButton)
        await waitFor(() => {
            expect(mockPush).toHaveBeenCalledWith(HOME)
        }, { timeout: 3000 })
    })
})