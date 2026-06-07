import {
    hasPermission
} from "../services/permissionService";

export default function ProtectedComponent(

    {

        user,

        permission,

        children

    }

){

    if(

        !hasPermission(

            user,

            permission

        )

    ){

        return null;

    }

    return children;

}