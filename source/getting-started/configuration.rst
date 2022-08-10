Configuration
=============

.. contents::
    :depth: 2
    :local:

Once you have references to the LMAA in your project you can begin the journey by creating the LMAAConfig configuration object for the Airline Accelerator. 

Please store your client id/client secret in your local gradle.properties file.
ensure that this is never committed to source control.
The standard practice for exposing these values to your code would be to then add a buildConfigField entry in your application’s gradle file:

.. code:: groovy

    build_environment=your-build-environment
    client_id=your-client-id
    client_secret=your-client-secret

.. code:: groovy

    buildConfigField('String', 'BUILD_ENVIRONMENT', "\"${build_environment}\"")
    buildConfigField('String', 'CLIENT_ID', "\"${client_id}\"")
    buildConfigField('String', 'CLIENT_SECRET', "\"${client_secret}\"")

Referenced in your app code:

.. code:: java

    BuildConfig.CLIENT_ID


.. note:: Examples below assume that the SDK has already been installed into the application

.. note::
    Contact the :doc:`Support Desk </support/support-desk>` to be granted a *Map Name* and *Project ID*
    to use within ``mapUrl`` and ``projectId``



Define a ``LMAAConfig`` object and populate it with the required parameters:


.. platform-code::

    .. code-block:: java
        :class: platform platform-android

        final HashMap<String, Object> customParameters = new HashMap<>();
        customParameters.put("pnrNumber", "YOUR PNR NUMBER HERE");

        LMAAConfig lmaaConfig = new LMAAConfig.Builder()
       .mapDesignator(new MapDesignator(airportIataCode, terminalCode))
       .mapContainerId(R.id.mapPlaceholder)
       .authenticationParameters(
               new AuthenticationParameters(
                       BuildConfig.AVIATION_ACCELERATOR_ENVIRONMENT,
                       BuildConfig.AVIATION_ACCELERATOR_CLIENT_ID,
                       BuildConfig.AVIATION_ACCELERATOR_CLIENT_SECRET
               )
       )
       .friendlySessionName("friendlySessionName")
       .flightRegistrationData(
               new FlightRegistrationData(
                       "callingAirline",        // Calling airline
                       BuildConfig.APPLICATION_ID,    // Calling application id
                       new Date(),            // Inbound flight date
                       "inboundFlightNumber",    // Inbound flight number
                       new Date(),            // Outbound flight date
                       "outboundFlightNumber",    // Outbound flight number
               )
       )
       .customParameters(customParameters)
       .foregroundServiceProperties(
               new LivingMapConfig.ForegroundServiceProperties(
                       null,
                       "Living Map",   
                       "Precision Positioning System is Running"
               )
       )
       .build();

    .. code-block:: swift
        :class: platform platform-ios
            
        let customParameters: NSDictionary = [
            "pnrNumber": <PNR FROM APPLICATION>, 
            "gateInitialised": true
        ]
                        
        let lmaaConfig = LMAAConfig(
            mapDesignator: MapDesignator(
                airportIataCode: "FRA",               // Airport IATA code
                terminalCode: "T1"                    // Terminal code
            ),
            mapSize: CGRect(                          // Map size and position definition
                x: 0,
                y: 0,
                width: self.view.frame.width,
                height: self.view.frame.height
            ),
            viewController: self,                     // View controller to overlay the map onto.
                                                    // This view controller should also implement
                                                    // the LivingMapMappingEvents protocol.
            authenticationParameters: AuthenticationParameters(
                clientId: CLIENT_ID,                  // Your Client Id
                clientSecret: CLIENT_SECRET           // Your Client Secret
            ),
            friendlySessionName: "name",              // Friendly session name
            flightRegistrationData: FlightRegistrationData(
                uid: "uID",                           // Unique id
                callingAirline: "",                   // Calling airline
                callingApplication: "",               // Calling application id
                inboundFlightDate: Date(),            // Inbound flight date
                inboundFlightNumber: "",              // Inbound flight number
                outboundFlightDate: Date(),           // Outbound flight date
                outboundFlightNumber: ""              // Outbound flight number
            ),
            customParameters: customParameters        // Custom parameters to pass to Live Location
        )


LMAAConfig Data -

- mapDesignator (m) :- used to determine the airport and terminal using the standard IATA coding. This will ensure the correct airport is loaded. This airport must be available in the solution. 

- mapContainerId (m) :- abbreviation: is the UI component where you would like the LMAA to display its visual output.

- authenticationParameters (m) :- Environment, Client id and Secret  these are your environment and SDK credentials used to allow access to the LMAA and its underlying SDKs. They are passed within a new AuthenticationParameters object.

- friendlySessionName :- is used to allow you to pass back a meaningful friendly identifier for the navigation session that will be displayed in all upstream services (such as Live Location) relating to this unique session. This is bound to the internal Device/Session ID inside the LMAA.

- FlightRegistrationData :- This collection provides the information to allow the LMAA to dynamically request flight data from the DCI services.

        FlightRegistrationData.callingAirline (m) : must be set to the IATA airline code for the airline using the LMAA.

        FlightRegistrationData.inboundFlightDate (m) : must be the scheduled inbound datetime for the flight.

        FlightRegistrationData.inboundFlightNumber (m) : must be set to the IATA flight number for the inbound.

        FlightRegistrationData.outboundFlightDate (m) : must be the scheduled outbound datetime for the flight.

        FlightRegistrationData.outboundFlightNumber (m) : must be set to the IATA flight number for the outbound.

- customParameters :- is used to allow you to pass custom parameters (for example, the PNR record). This will be displayed in all upstream services (such as Live Location/Gate Agent View) relating to this unique session:

    HashMap<String, Object> customParameters = new HashMap<>();
    customParameters.put("pnrNumber", 000);


- foregroundServiceProperties :-  is an optional object to pass to the Aviation Accelerator and allows you to customise how the Android front end positioning service notification looks like to the user. The object consists of three arguments; an icon (int), a title (string) and a detail (string). The front end service notification ensures that the positioning system keeps running after the user locks their screen.

        Icon - To customise the icon on the notification pass the int reference of 
        the drawable resource from your application. For example: 

        R.drawable.notification_icon

        Pass ‘null’ to use the default icon

        Title - The title text shown in the notification. The maximum permissible 
        length of this string is 30 characters. 

        Pass ‘null’ to use the default title

        Detail - The detail text shown in the notification. The maximum permissible 
        length of this string is 40 characters

        Pass ‘null’ or omit the parameter from the builder to use the default details.

Once the configuration object has been built, a call to the go() method of the LivingMapAviationAccelerator SDK is required



The defined ``mapConfig`` variable will then by used when :doc:`Initialising the Positioning System </positioning/initialising>` or :doc:`Initialising the Mapping System on Android </mapping/initialising-on-android>` / :doc:`Initialising the Mapping System on iOS </mapping/initialising-on-ios>`