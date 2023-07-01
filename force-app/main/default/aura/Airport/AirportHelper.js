({
	FetchFlightDetailsHelper : function(component, event, helper) {
		var action=component.get('c.GetFlightDetails');
        action.setCallback(this,function(response){
            var state=response.getState();
            console.log('problem'+response.getError());
            console.log('state'+state);
        	var responseValues=response.getReturnValue();
            console.log('Response Values'+responseValues);
            component.set('v.FlightList',responseValues); 
            component.set('v.FlightFound',true);
        });
        $A.enqueueAction(action,false);
	},
    handleFlightSearchhelper : function(component, event, helper) {
        var from=event.getParam("fromfil");
        var to=event.getParam("tofil");
        console.log('from:'+from);
        console.log('to:'+to);
        var action=component.get('c.getFilteredFlights');
        action.setParams({
            'fromcity':from,
            'tocity':to,
        });
        action.setCallback(this,function(response){
            var state=response.getState();
            console.log('problem'+response.getError());
            console.log('state'+state);
        	var responseValues=response.getReturnValue();
            console.log('Response Values'+responseValues);
            component.set('v.FlightList',responseValues); 
            component.set('v.FlightFound',true);
        });
        $A.enqueueAction(action,false);
    }
})