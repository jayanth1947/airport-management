trigger Pilot on Pilot__c (before insert) {
    if(Trigger.isInsert){
        if(Trigger.isBefore){
            PilotHandler.beforeInsert(Trigger.new);
        }
        else if(Trigger.isAfter){
            
        
    }

    }}