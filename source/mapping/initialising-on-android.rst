Initialising the Map Component on Android
=========================================

.. contents::
    :depth: 2
    :local:

The *LivingMapSDK* provides functionality to integrate Mapping into an application, and provide positioning directly onto the map as a 'blue dot'. The following instructions detail how to include a map within an application.

.. note:: Examples below assume that the SDK has already been installed into the application and the SDK has been :doc:`configured </getting-started/configuration>` correctly

.. attention:: **Screen Orientation and Mapping** – Only portrait-mode is supported by *LivingMapSDK* when Mapping is used. Applications which integrate the SDK and use Mapping must ensure it is locked to Portrait-mode through its configuration.


Initialising the Map Component
------------------------------

Initialise the Map Component by calling ``initMapComponent()`` from the ``LivingMapSDKManager`` singleton, passing in the :doc:`LivingMapConfig </getting-started/configuration>` object created previously, which will in turn initialise the Positioning System.

.. platform-code::

    .. code-block:: java
        :class: platform platform-android

        LivingMapFragment mapFragment = LivingMapSDKManager.sharedInstance().initMapComponent(
            getApplicationContext(), mapConfig
        );


Defining a Map Fragment
-----------------------

Place a ``<FrameLayout>`` XML tag within your activity:

.. platform-code::

    .. code-block:: xml
        :class: platform platform-android

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

.. platform-code::

    .. code-block:: java
        :class: platform platform-android

        FragmentTransaction fragmentTransaction = getFragmentManager().beginTransaction();
        fragmentTransaction.replace(R.id.mapPlaceholder, mapFragment);
        fragmentTransaction.commit();


The map fragment will automatically start and connect to the Positioning Service, and after a short delay a blue location dot should appear on the map if the Positioning System can locate its position.



De-initialising the Map Component
---------------------------------

When no longer required, it is advised to de-initialise the Map Component by calling ``deinitMapComponent()`` from the ``LivingMapSDKManager`` singleton:

.. platform-code::

    .. code-block:: java
        :class: platform platform-android

        LivingMapSDKManager.sharedInstance().deinitMapComponent(getApplicationContext());


