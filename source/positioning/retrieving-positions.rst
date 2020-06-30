Retrieving Positions
====================

.. contents::
    :depth: 2
    :local:

The *LivingMapSDK* provides functionality to retrieve the current position of the device on which the SDK is running. The following instructions detail how to retrieve a one-off position, or a continuous stream of positioning information.

.. note:: Examples below assume that the SDK has already been :doc:`installed </getting-started/installation>` into the application


Initialising the Positioning System
-----------------------------------

Before using the Positioning System, it requires initialising by calling ``initPositioningSystem()`` from the ``LivingMapSDKManager`` singleton, passing the map URL:

.. code-block:: java

    String mapUrl = "YourMapName.livingmap.com";
    LivingMapSDKManager.sharedInstance().initPositioningSystem(getApplicationContext(), mapUrl);

.. note:: Contact the :doc:`Support Desk </support/support-desk>` to be granted a Map URL


Retrieve a One-Off Position
---------------------------

Request a one-off location by using ``requestLocationOneTime()`` from the ``LivingMapSDKManager`` singleton, and pass an instance of ``LivingMapLocationListener`` to handle the response:

.. code-block:: java

    LivingMapSDKManager.sharedInstance().requestLocationOneTime(new LivingMapLocationListener() {
        @Override
        public void locationReceived(LivingMapLocation location) {
            if (location != null) {
                Toast.makeText(getApplicationContext(), String.format("Location received: %s", location.toString()), Toast.LENGTH_SHORT).show();
            }
        }
    });

.. caution:: During a one-off location request, if the service has not finished downloading the necessary Wi-Fi grid details, then only a GPS-based location is received. Due to being indoors, this could be significantly less accurate than with the inclusion of the Wi-Fi grid


Retrieving Continuous Positions
-------------------------------

Subscribe to the Positioning Service
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Request a location subscription by using ``requestLocationSubscription()`` from the ``LivingMapSDKManager`` singleton, and pass an instance of a ``LivingMapLocationListener`` to handle the response:

.. code-block:: java

    LivingMapSDKManager.sharedInstance().requestLocationSubscription(getApplicationContext(), new LivingMapLocationListener() {
        @Override
        public void locationReceived(LivingMapLocation location) {
            if (location != null) {
                Toast.makeText(getApplicationContext(), String.format("Location received: %s", location.toString()), Toast.LENGTH_SHORT).show();
            }
        }
    });


Unsubscribe from the Positioning Service
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Request that the location subscription is removed by using ``removeLocationSubscription()`` within the ``LivingMapSDKManager`` singleton:

.. code-block:: java

    LivingMapSDKManager.sharedInstance().removeLocationSubscription();



De-initialising the Positioning System
--------------------------------------

When no longer required, it is advised to de-initialise the Positioning System by calling ``deinitPositioningSystem()`` from the ``LivingMapSDKManager`` singleton:

.. code-block:: java

    LivingMapSDKManager.sharedInstance().deinitPositioningSystem(getApplicationContext());
