Event Handling
==============

.. contents::
    :depth: 2
    :local:


Handling Standard Events
------------------------

The SDK surfaces certain map journey events to your application so you can act on them if required. To use these events create an instance of a ``LivingMapEvents`` object, overriding required methods, then pass the Event Handler to the Map Fragment.

Create an instance of ``LivingMapEvents``, overriding the required methods:

.. code-block:: java

    LivingMapEvents eventHandler = new LivingMapEvents() {

        /**
         * Called when the map object has finished loading
         */
        @Override
        public void mapReady() {}

        /**
         * Called when an asset on a routing journey has reached their destination
         */
        @Override
        public void destinationReached() {}

        /**
         * Custom event fired from within the map control
         */
        @Override
        public void customEvent(String customEventId, String customEventParameters) {}

        /**
         * The location of the 'blue dot' on the map at every update
         */
        @Override
        public void locationReceived(LivingMapLocation location) {}

        /**
         * Error trap, any issues reported by the SDK will be surfaced here
         */
        @Override
        public void errorReceived(Error error) {}

        /**
         * Event fired when the connectivity status of the device changes [ONLINE/OFFLINE]
         */
        @Override
        public void onConnectivityStatusChanged(LivingMapConstants.ConnectivityStatus currentConnectivityStatus) {}

    };

Assign the new Event Handler to the Map Fragment:

.. code-block:: java

    mapFragment.setEventHandler(eventHandler);


Handling Custom Events
----------------------

The SDK can send custom events to your application via the ``customEvent()`` handler in the ``LivingMapEvents`` interface. The event will consist of an ID string and a string of parameters in JSON format.

.. note::
    Contact the :doc:`Support Desk </support/support-desk>` to discuss integrating custom events within your map.

END