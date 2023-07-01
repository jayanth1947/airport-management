({
    FetchFlightDetails : function(component, event, helper) {
        helper.FetchFlightDetailsHelper(component, event, helper);
    },
    reInit : function(component, event, helper) {
        $A.get('e.force:refreshView').fire();
    },
	NavigateToFlight : function(component, event, helper) {
		component.set('v.openFlight',"true");
	},
    closeFlightTab  : function(component, event, helper) {
		component.set('v.openFlight',"false");
	},
    NavigateToALLFlight : function(component, event, helper) {
		component.set('v.AllFlights',"true");
	},
    closeAllFlight  : function(component, event, helper) {
		component.set('v.AllFlights',"false");
	},
    NavigateTopilots : function(component, event, helper) {
		component.set('v.openpilots',"true");
	},
    closePilotsTab  : function(component, event, helper) {
		component.set('v.openpilots',"false");
	},
    NavigateToairplanes : function(component, event, helper) {
		component.set('v.openairplanes',"true");
	},
    closeAirplanesTab  : function(component, event, helper) {
		component.set('v.openairplanes',"false");
	},
    NavigateToairlines : function(component, event, helper) {
		component.set('v.openairlines',"true");
	},
    closeAirlinesTab  : function(component, event, helper) {
		component.set('v.openairlines',"false");
	},
    NavigateTopassengers : function(component, event, helper) {
		component.set('v.openPassengers',"true");
	},
    closePassengersTab  : function(component, event, helper) {
		component.set('v.openPassengers',"false");
	},
    NavigateTotickets : function(component, event, helper) {
		component.set('v.opentickets',"true");
	},
     closeTicketsTab  : function(component, event, helper) {
		component.set('v.opentickets',"false");
	},
     NavigateToboardingpasses : function(component, event, helper) {
		component.set('v.openboardingpasses',"true");
	},
    closeBoardingPassesTab  : function(component, event, helper) {
		component.set('v.openboardingpasses',"false");
	},
    handleSuccess1 : function(component, event, helper) {
        component.set('v.SuccessMsg1',"true");
	},
    handleSuccess2 : function(component, event, helper) {
        component.set('v.SuccessMsg2',"true");
	},
    handleSuccess3 : function(component, event, helper) {
        component.set('v.SuccessMsg3',"true");
	},
    handleSuccess4 : function(component, event, helper) {
        component.set('v.SuccessMsg4',"true");
	},
    handleSuccess5 : function(component, event, helper) {
        component.set('v.SuccessMsg5',"true");
	},
    handleSuccess6 : function(component, event, helper) {
        component.set('v.SuccessMsg6',"true");
	},
    handleSuccess7 : function(component, event, helper) {
        component.set('v.SuccessMsg7',"true");
	},
    handleFlightSearch: function(component, event, helper) {
       helper.handleFlightSearchhelper(component, event, helper);
	}
})