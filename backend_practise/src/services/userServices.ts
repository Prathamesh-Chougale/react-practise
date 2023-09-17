import apiClient from "./api-client";

export interface User {
    name: string;
    id: number;
}

class UserServices {
    getAllUser() {
        const controller = new AbortController();
        const request = apiClient
            .get<User[]>("/users", {
                signal: controller.signal,
            });
        return { request, cancel: () => controller.abort() };
    }
    deleteUser(id: number) {
        return apiClient.delete("users/" + id)
    }
    AddUser(user: User) {
        return apiClient.post("users", user)
    }
    updateUser(user: User) {
        return apiClient.patch("users/" + user.id, user)
    }
}

export default new UserServices();