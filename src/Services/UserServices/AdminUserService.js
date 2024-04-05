class AdminUserService{
    constructor(userRepository){
        this.userRepository = userRepository
    }
    async execute({id, isAdmin}){
        const adminUser = await this.userRepository.adminUser({id, isAdmin})
        return adminUser
    }

}

module.exports = AdminUserService