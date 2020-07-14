Retrieving Positions
====================

.. contents::
    :depth: 2
    :local:

.. note:: Examples below assume that the SDK has already been installed into the application, has been :doc:`configured </getting-started/configuration>` correctly, and the Positioning System has been :doc:`initialised </positioning/initialising>`


Retrieve a One-Off Position
---------------------------

Request a one-off location by using ``requestLocationOneTime()`` from ``LivingMapSDKManager``, and pass an instance of ``LivingMapLocationListener`` to handle the response:

.. platform-code::

    .. code-block:: java
        :class: platform platform-android

        LivingMapSDKManager.sharedInstance().requestLocationOneTime(new LivingMapLocationListener() {
            @Override
            public void locationReceived(LivingMapLocation location) {
                if (location != null) {
                    Toast.makeText(getApplicationContext(), String.format("Location received: %s", location.toString()), Toast.LENGTH_SHORT).show();
                }
            }
        });

    .. code-block:: swift
        :class: platform platform-ios

        LivingMapSDKManager.sharedInstance.requestLocationOneTime(listener: self)


.. TODO – need to expand this like the Android version


.. caution:: During a one-off location request, if the service has not finished downloading the necessary Wi-Fi grid details, then only a GPS-based location is received. Due to being indoors, this could be significantly less accurate than with the inclusion of the Wi-Fi grid


Retrieving Continuous Positions
-------------------------------

Subscribe to the Positioning Service
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Request a location subscription by using ``requestLocationSubscription()`` from the ``LivingMapSDKManager`` singleton, and pass an instance of a ``LivingMapLocationListener`` to handle the response:


.. platform-code::

    .. code-block:: java
        :class: platform platform-android

        LivingMapSDKManager.sharedInstance().requestLocationSubscription(getApplicationContext(), new LivingMapLocationListener() {
            @Override
            public void locationReceived(LivingMapLocation location) {
                if (location != null) {
                    Toast.makeText(getApplicationContext(), String.format("Location received: %s", location.toString()), Toast.LENGTH_SHORT).show();
                }
            }
        });

    .. code-block:: swift
        :class: platform platform-ios

        LivingMapSDKManager.sharedInstance.requestLocationSubscription(listener: self)


.. TODO – need to expand this like the Android version


Unsubscribe from the Positioning Service
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Request that the location subscription is removed by using ``removeLocationSubscription()`` within the ``LivingMapSDKManager`` singleton:

.. platform-code::

    .. code-block:: java
        :class: platform platform-android

        LivingMapSDKManager.sharedInstance().removeLocationSubscription();

    .. code-block:: swift
        :class: platform platform-ios

        LivingMapSDKManager.sharedInstance.removeLocationSubscription(listener: self)
