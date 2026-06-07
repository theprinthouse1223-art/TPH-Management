export function hasPermission(

    user,

    permission

){

    if(
        !user
    )
        return false;

    if(
        !user.role
    )
        return false;

    return user
        .role
        .permissions
        ?.some(

            p=>

            p.permission.code
            ===
            permission

        );

}