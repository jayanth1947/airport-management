({
	initSearch : function(component, event, helper) {
       var fromOptions=[{label:'All Flights',value:'ALL'},
                         {label:'Mumbai',value:'Mumbai'},
                         {label:'Jaipur',value:'Jaipur'},
                         {label:'Kadapa',value:'Kadapa'},	
                         {label:'Kolkata',value:'Kolkata'},
                         {label:'Chennai',value:'Chennai'},
                         {label:'Bangalore',value:'Bangalore'},
                         {label:'Hyderabad',value:'Hyderabad'},
                         {label:'Delhi',value:'Delhi'},
                         {label:'Pune',value:'Pune'},
                         {label:'Bangkok',value:'Bangkok'}
                        ];
         var toOptions=[{label:'All Flights',value:'ALL'},
                         {label:'Mumbai',value:'Mumbai'},
                         {label:'Jaipur',value:'Jaipur'},
                         {label:'Kolkata',value:'Kolkata'},
                         {label:'Kadapa',value:'Kadapa'},
                         {label:'Chennai',value:'Chennai'},
                         {label:'Bangalore',value:'Bangalore'},
                         {label:'Hyderabad',value:'Hyderabad'},
                         {label:'Delhi',value:'Delhi'},
                         {label:'Pune',value:'Pune'},
                         {label:'Bangkok',value:'Bangkok'}
                        ];
        component.set('v.fromOptions',fromOptions);
        component.set('v.toOptions',toOptions);
	},
    handleFilterChange : function(component, event, helper) {
        var filterEvent=component.getEvent('FlightSearchEvent');
        var f=component.get("v.from");
        var t=component.get("v.to");
        console.log('from:'+f);
        console.log('to:'+t);
         filterEvent.setParams({
            "fromfil":component.get("v.from"),
            "tofil":component.get("v.to"),
        });
        filterEvent.fire();
    }
})