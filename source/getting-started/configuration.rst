Configuration
=============

.. contents::
    :depth: 2
    :local:

Once the SDK has been installed into an application, it will then require configuring. Below are details the steps involved to configure the SDK to operate within an application.

.. note:: Examples below assume that the SDK has already been installed into the application

.. note::
    Contact the :doc:`Support Desk </support/support-desk>` to be granted a *Map Name* and *Project ID*
    to use within ``mapUrl`` and ``projectId``



Define a ``LivingMapConfig`` object and populate it with the required parameters:

.. platform-code::

    .. code-block:: java
        :class: platform platform-android

        /**
         * The Map URL provided by Living Map
         */
        String mapUrl = "YourMapName.livingmap.com";

        /**
         * The Backend URL provided by Living Map
         */
        String projectId = "YourProjectId";

        /**
         * Which environment to use [dev / proof / prod]
         */
        String environment = "dev";

        /**
         * Whether to display a debug overlay providing sensor values information [true / false]
         */
        boolean debugMode = false;

        /**
         * Whether to render a routing overlay [true / false]
         *
         * If your map has been set up to allow routing requests, this parameter will change
         * Map UI when a request is made. An overlay is added showing the approximate time to
         * destination given an average walking pace.
         */
        boolean routingMode = false;

        /**
         * Which sensor method should the SDK use for positioning [LocationSystem.WIFI / LocationSystem.BEACON / LocationSystem.GPS]
         */
        LocationSystem locationSystem = LocationSystem.BEACON;


        try {
            LivingMapConfig mapConfig = new LivingMapConfig(
                mapUrl,
                projectId,
                environment,
                debugMode,
                routingMode,
                locationSystem
            );
        } catch (Exception e) {
            // Handle exception
        }

    .. code-block:: swift
        :class: platform platform-ios

        /**
         * The Map URL provided by Living Map
         */
        let mapUrl = "YourMapName.livingmap.com"

        /**
         * The Backend URL provided by Living Map
         */
        let projectId = "YourProjectId"

        /**
         * Which environment to use [dev / proof / prod]
         */
        let environment = "dev"

        /**
         * Whether to display a debug overlay providing sensor values information [true / false]
         */
        let debugMode = false

        /**
         * Whether to render a routing overlay [true / false]
         *
         * If your map has been set up to allow routing requests, this parameter will change
         * Map UI when a request is made. An overlay is added showing the approximate time to
         * destination given an average walking pace.
         */
        let routingMode = false

        /**
         * Whether to use bluetooth beacons within the SDK for positioning
         */
        let useBeaconLocation = true


        let mapConfig = LivingMapConfig(
            mapUrl: mapUrl,
            project: projectId,
            environment: environment,
            startPPS: false, // this parameter is deprecated
            debugMode: debugMode,
            routingMode: routingMode,
            useBeaconLocation: useBeaconLocation
        )


The defined ``mapConfig`` variable will then by used when :doc:`Initialising the Positioning System </positioning/initialising>` or :doc:`Initialising the Mapping System on Android </mapping/initialising-on-android>` / :doc:`Initialising the Mapping System on iOS </mapping/initialising-on-ios>`