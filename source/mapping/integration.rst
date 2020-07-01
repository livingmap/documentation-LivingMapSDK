Map Integration
===============

.. contents::
    :depth: 2
    :local:

The *LivingMapSDK* provides functionality to integrate Mapping into an application, and provide positioning directly onto the map as a 'blue dot'. The following instructions detail how to include a map within an application.

.. note:: Examples below assume that the SDK has already been :doc:`installed </getting-started/installation>` into the application

.. attention:: **Screen Orientation and Mapping** – Only portrait-mode is supported by *LivingMapSDK* when Mapping is used. Applications which integrate the SDK and use Mapping must ensure it is locked to Portrait-mode through its configuration.

Initialising the Map Component
------------------------------

Define a ``LivingMapConfig`` object and populate it with the required parameters:

.. note::
    Contact the :doc:`Support Desk </support/support-desk>` to be granted a *Map Name*
    to use within ``mapUrl`` and ``backendUrl``


.. code-block:: java

    /**
     * The Map URL provided by Living Map
     */
    String mapUrl = "YourMapName.livingmap.com";

    /**
     * The Backend URL provided by Living Map
     */
    String backendUrl = "api.livingmap.com/YourMapName/";

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
            backendUrl,
            environment,
            debugMode,
            routingMode,
            locationSystem
        );
    } catch (Exception e) {
        // Handle exception
    }


Initialise the Map Component by calling ``initMapComponent()`` from the ``LivingMapSDKManager`` singleton, passing in the ``LivingMapConfig`` object created previously, which will in turn initialise the Positioning System:

.. code-block:: java

    LivingMapFragment mapFragment = LivingMapSDKManager.sharedInstance().initMapComponent(
        getApplicationContext(), mapConfig
    );


Defining a Map Fragment
-----------------------------

Place a ``<FrameLayout>`` XML tag within your activity:

.. code-block:: xml

    <FrameLayout
        android:id="@+id/mapPlaceholder"
        android:layout_width="0dp"
        android:layout_height="0dp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintLeft_toLeftOf="parent"
        app:layout_constraintRight_toRightOf="parent"
        app:layout_constraintTop_toTopOf="parent">
    </FrameLayout>

.. note:: This layout example presents the map within the whole screen area


Injecting the Map Fragment
--------------------------

Inject the Map Fragment into the activity where required:

.. code-block:: java

    FragmentTransaction fragmentTransaction = getFragmentManager().beginTransaction();
    fragmentTransaction.replace(R.id.mapPlaceholder, mapFragment);
    fragmentTransaction.commit();

The map fragment will automatically start and connect to the Positioning Service, and after a short delay a blue location dot should appear on the map if the Positioning System can locate its position.



De-initialising the Map Component
---------------------------------

When no longer required, it is advised to de-initialise the Map Component by calling ``deinitMapComponent()`` from the ``LivingMapSDKManager`` singleton:

.. code:: java

    LivingMapSDKManager.sharedInstance().deinitMapComponent(getApplicationContext());


