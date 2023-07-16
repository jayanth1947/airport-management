({
	// Fetches flight details using a helper function
    FetchFlightDetails : function(component, event, helper) {
        helper.FetchFlightDetailsHelper(component, event, helper);
    },

	// Refreshes the view
    reInit : function(component, event, helper) {
        $A.get('e.force:refreshView').fire();
    },

	// Navigates to the flight tab
	NavigateToFlight : function(component, event, helper) {
		component.set('v.openFlight',"true");
	},

	// Closes the flight tab
    closeFlightTab  : function(component, event, helper) {
		component.set('v.openFlight',"false");
	},

	// Navigates to the all flights tab
    NavigateToALLFlight : function(component, event, helper) {
		component.set('v.AllFlights',"true");
	},

	// Closes the all flights tab
    closeAllFlight  : function(component, event, helper) {
		component.set('v.AllFlights',"false");
	},

	// Navigates to the pilots tab
    NavigateTopilots : function(component, event, helper) {
		component.set('v.openpilots',"true");
	},

	// Closes the pilots tab
    closePilotsTab  : function(component, event, helper) {
		component.set('v.openpilots',"false");
	},

	// Navigates to the airplanes tab
    NavigateToairplanes : function(component, event, helper) {
		component.set('v.openairplanes',"true");
	},

	// Closes the airplanes tab
    closeAirplanesTab  : function(component, event, helper) {
		component.set('v.openairplanes',"false");
	},

	 // Navigates to the airlines tab
    NavigateToairlines : function(component, event, helper) {
		component.set('v.openairlines',"true");
	},

	// Closes the airlines tab
    closeAirlinesTab  : function(component, event, helper) {
		component.set('v.openairlines',"false");
	},

	// Navigates to the passengers tab
    NavigateTopassengers : function(component, event, helper) {
		component.set('v.openPassengers',"true");
	},

	// Closes the passengers tab
    closePassengersTab  : function(component, event, helper) {
		component.set('v.openPassengers',"false");
	},

	// Navigates to the tickets tab
    NavigateTotickets : function(component, event, helper) {
		component.set('v.opentickets',"true");
	},

	// Closes the tickets tab
     closeTicketsTab  : function(component, event, helper) {
		component.set('v.opentickets',"false");
	},

	// Navigates to the boarding passes tab
     NavigateToboardingpasses : function(component, event, helper) {
		component.set('v.openboardingpasses',"true");
	},

	// Closes the boarding passes tab
    closeBoardingPassesTab  : function(component, event, helper) {
		component.set('v.openboardingpasses',"false");
	},

	// Handles the success event 1
    handleSuccess1 : function(component, event, helper) {
        component.set('v.SuccessMsg1',"true");
	},

	// Handles the success event 2
    handleSuccess2 : function(component, event, helper) {
        component.set('v.SuccessMsg2',"true");
	},

	// Handles the success event 3
    handleSuccess3 : function(component, event, helper) {
        component.set('v.SuccessMsg3',"true");
	},

	// Handles the success event 4
    handleSuccess4 : function(component, event, helper) {
        component.set('v.SuccessMsg4',"true");
	},

	// Handles the success event 5
    handleSuccess5 : function(component, event, helper) {
        component.set('v.SuccessMsg5',"true");
	},

	// Handles the success event 6
    handleSuccess6 : function(component, event, helper) {
        component.set('v.SuccessMsg6',"true");
	},

	// Handles the success event 7
    handleSuccess7 : function(component, event, helper) {
        component.set('v.SuccessMsg7',"true");
	},

	// Handles the flight search event using a helper function
    handleFlightSearch: function(component, event, helper) {
       helper.handleFlightSearchhelper(component, event, helper);
	}
})