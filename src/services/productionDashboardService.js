export function loadProductionDashboard(){

    return window
        .tph
        .production
        .dashboard();

}

export function moveToNextStage(
    orderId
){

    return window
        .tph
        .production
        .moveNext(
            orderId
        );

}