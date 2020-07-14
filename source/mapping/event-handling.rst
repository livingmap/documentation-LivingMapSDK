Event Handling
==============

.. contents::
    :depth: 2
    :local:


Handling Standard Events
------------------------

The SDK surfaces certain map journey events to your application so you can act on them if required. To use these events create an instance of a ``LivingMapEvents`` object, overriding required methods.

Create an instance of ``LivingMapEvents``, overriding the required methods:


.. platform-code::

    .. code-block:: java
        :class: platform platform-android

        LivingMapEvents eventHandler = new LivingMapEvents() {

            /**
             * Custom event fired from within the map control
             */
            @Override
            public void customEvent(String customEventId, String customEventParameters) {}

            /**
             * Called when an asset on a routing journey has reached their destination
             */
            @Override
            public void destinationReached() {}

            /**
             * Error trap, any issues reported by the SDK will be surfaced here
             */
            @Override
            public void errorReceived(Error error) {}

            /**
             * The location of the 'blue dot' on the map at every update
             */
            @Override
            public void locationReceived(LivingMapLocation location) {}

            /**
             * Called when the map object has finished loading
             */
            @Override
            public void mapReady() {}

            /**
             * Event fired when the connectivity status of the device changes [ONLINE/OFFLINE]
             */
            @Override
            public void onConnectivityStatusChanged(LivingMapConstants.ConnectivityStatus currentConnectivityStatus) {}

        };

    .. code-block:: swift
        :class: platform platform-ios

        class MapViewController: UIViewController, LivingMapEvents {

            /**
             * Custom event fired from within the map control
             */
            func customEvent(eventId: String, eventParameters: NSArray) {}

            /**
             * Called when an asset on a routing journey has reached their destination
             */
            func destinationReached() {}

            /**
             * Error trap, any issues reported by the SDK will be surfaced here
             */
            func errorReceived(error: Error) {}

            /**
             * The location of the 'blue dot' on the map at every update
             */
            func locationReceived(location: LivingMapLocation) {}

            /*
             * Called when the map has been closed
             */
            func mapClosed() {}

            /**
             * Called when the map object has finished loading
             */
            func mapReady() {}

            /**
             * Event fired when the connectivity status of the device changes [ONLINE/OFFLINE]
             */
            func onConnectivityStatusChanged(connectivityStatus: LivingMapConstants.ConnectivityStatus) {}

        }

.. note:: There is currently no ``mapClosed()`` event available for Android


Assign the new *Event Handler*:

.. platform-code::

    .. code-block:: java
        :class: platform platform-android

        mapFragment.setEventHandler(eventHandler);

    .. code-block:: swift
        :class: platform platform-ios

        LivingMapSDKManager.sharedInstance.getLivingMapComponent()?.setEventHandler(eventHandler: self)


Handling Custom Events
----------------------

The SDK can send custom events to your application via the ``customEvent()`` handler in the ``LivingMapEvents`` interface. The event will consist of an ID string and a string of parameters in JSON format.

.. note::
    Contact the :doc:`Support Desk </support/support-desk>` to discuss integrating custom events within your map.
