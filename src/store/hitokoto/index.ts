import request from '@/request'
import { defineStore } from 'pinia'

interface State {
    token: string | undefined
}

interface Response {
    status: number,
    message: string,
    data: Array<Login>,
    ts: bigint
}

interface Login {
    id: bigint,
    name: string,
    email: string,
    is_suspended: number,
    is_admin: number,
    is_reviewer: number,
    email_verified_at: Date,
    created_from: string,
    created_at: Date,
    updated_at: Date,
    token: string
}

export const useIndexStore = defineStore('hitokotoIndex', {
    state: (): State => ({
        token: undefined
    }),
    actions: {
        login: async (formData: FormData): Promise<Response> => {
            const { data } = await request.post('auth/login', formData);
            return data
        }
    }
})