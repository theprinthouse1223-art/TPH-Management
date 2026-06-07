export async function createReprintJob(

    previousOrder

){

    return {

        orderNo:

            previousOrder
                .orderNo,

        status:

            "PENDING"

    };

}