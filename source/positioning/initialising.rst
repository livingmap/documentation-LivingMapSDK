Initialising the Positioning System
===================================

.. contents::
    :depth: 2
    :local:

The *LivingMapSDK* provides functionality to retrieve the current position of the device on which the SDK is running. The following instructions detail how to retrieve a one-off position, or a continuous stream of positioning information.

.. note:: Examples below assume that the SDK has already been installed into the application and the SDK has been :doc:`configured </getting-started/configuration>` correctly


Initialising the Positioning System
-----------------------------------

Before using the Positioning System, it requires initialising by calling ``initPositioningSystem()`` from ``LivingMapSDKManager``, passing in the :doc:`LivingMapConfig </getting-started/configuration>` object defined previously:

.. platform-code::

    .. code-block:: java
        :class: platform platform-android

        LivingMapSDKManager.sharedInstance().initPositioningSystem(getApplicationContext(), mapConfig);


    .. code-block:: swift
        :class: platform platform-ios

        LivingMapSDKManager.sharedInstance.initPositioningSystem(mapConfig: mapConfig)

Within an **iOS** application, the ``LivingMapLocationListener`` delegate object is usually handled by the *View Controller* which will override the ``locationReceived()`` method:

.. platform-code::

    .. code-block:: swift
        :class: platform platform-ios

        class ViewController: UIViewController, LivingMapLocationListener {

            func locationReceived(location: LivingMapLocation) {
                NSLog("Location received")
            }

        }


De-initialising the Positioning System
--------------------------------------

When no longer required, it is advised to de-initialise the Positioning System by calling ``deinitPositioningSystem()`` from the ``LivingMapSDKManager`` singleton:

.. platform-code::

    .. code-block:: java
        :class: platform platform-android

        LivingMapSDKManager.sharedInstance().deinitPositioningSystem(getApplicationContext());

    .. code-block:: swift
        :class: platform platform-ios

        LivingMapSDKManager.sharedInstance.deinitPositioningSystem()