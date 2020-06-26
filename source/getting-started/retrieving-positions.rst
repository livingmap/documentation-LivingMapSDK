Retrieving Positions
====================

.. contents::
    :depth: 2
    :local:


Obtaining a One-Off Position
----------------------------


Manually initialise the *Positioning* service by calling the ``LivingMapSDKManager`` singleton, passing the map URL:

.. code:: java

    String mapUrl = "YourMapName.livingmap.com";
    LivingMapSDKManager.sharedInstance().initPositioningSystem(getApplicationContext(), mapUrl);


Request a one-off location from the ``LivingMapSDKManager`` singleton, and pass an instance of a ``LivingMapLocationListener`` to handle the response:

.. code:: java

    LivingMapSDKManager.sharedInstance().requestLocationOneTime(new LivingMapLocationListener() {
        @Override
        public void locationReceived(LivingMapLocation location) {
            if (location != null) {
                Toast.makeText(getApplicationContext(), String.format("Location: %s", location.toString()), Toast.LENGTH_SHORT).show();
            }
        }
    });

.. caution:: During a one-off location request, if the service has not finished downloading the necessary wi-fi grid details, then only a GPS-based location is received. Due to being indoors, this could be significantly less accurate than with the inclusion of the wi-fi grid.



Subscribing to the Positioning Service
--------------------------------------

