import Router from '../router'

import { firebaseApp } from './useFirebase'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useAuth as FirebaseAuth } from '@vueuse/firebase/useAuth'

const Auth = getAuth(firebaseApp)

const { isAuthenticated, user } = FirebaseAuth(Auth)

export const useAuth = () => {
    
    const login = async (username, password) => {
        await signInWithEmailAndPassword(Auth, username, password)
        return isAuthenticated.value
    }

    const logout = async () => {
        await signOut(Auth)
        Router.push({name: 'Home'})
    }

    return {isAuthenticated, user, login, logout}
}