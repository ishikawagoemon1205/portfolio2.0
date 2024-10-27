export default defineNuxtRouteMiddleware(
    (): any => {
        return navigateTo('/login')
    }
)