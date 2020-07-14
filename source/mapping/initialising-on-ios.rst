Initialising the Map Component on iOS
=====================================

.. contents::
    :depth: 2
    :local:

The *LivingMapSDK* provides functionality to integrate Mapping into an application, and provide positioning directly onto the map as a 'blue dot'. The following instructions detail how to include a map within an application.

.. note:: Examples below assume that the SDK has already been installed into the application and the SDK has been :doc:`configured </getting-started/configuration>` correctly

.. attention:: **Screen Orientation and Mapping** – Only portrait-mode is supported by *LivingMapSDK* when Mapping is used. Applications which integrate the SDK and use Mapping must ensure it is locked to Portrait-mode through its configuration.


Initialising the Map Component
------------------------------

On iOS the Map Component is implemented as a View Controller which will automatically open on top of any currently displayed View Controller within your application.

Be sure to ``import LivingMapSDK`` within the View Controller class you're running the following code within.

Initialise the Map Component by calling ``initMapComponent()`` from the ``LivingMapSDKManager`` singleton, passing in the :doc:`LivingMapConfig </getting-started/configuration>` object created previously.


.. platform-code::

    .. code-block:: swift
        :class: platform platform-ios

        // A handle to the current on-screen view controller to render the map over
        mapConfig.viewController = self

        // CGRect defining the size of the Map Component on screen
        mapConfig.mapSize = self.view.bounds

        // Load and display the Map Component at the given position
        LivingMapSDKManager.sharedInstance.initMapComponent(mapConfig: mapConfig)

        // Initialise the Positioning System to show current location on the map
        LivingMapSDKManager.sharedInstance.initPositioningSystem(mapConfig: mapConfig)


The Map Component will display and connect to the Positioning Service, and after a short delay a blue location dot should appear on the map if the Positioning System can locate its position.


De-initialising the Map Component
---------------------------------

When no longer required, it is advised to de-initialise the Map Component by calling ``deinitMapComponent()`` from the ``LivingMapSDKManager`` singleton:

.. platform-code::

    .. code-block:: swift
        :class: platform platform-ios

        LivingMapSDKManager.sharedInstance.deinitMapComponent()


