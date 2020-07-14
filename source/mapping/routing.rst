Routing
=======

.. contents::
    :depth: 2
    :local:

The *LivingMapSDK* provides functionality for plotting a route on a map, from a origin to a destination via a list of optional intermediate destinations.

.. note::
    This will require the *Routing Capability* to be added to your map. Contact the :doc:`Support Desk </support/support-desk>` for this to be granted


Requesting a Route
------------------

Call the ``requestRoute()`` method on the *Map Fragment*, providing origin and destination locations in *Easting/Northing* format, along with a floor number.

* Easting is the eastward-measured distance (or the x-coordinate)
* Northing is the northward-measured distance (or the y-coordinate)
* Floor numbers typically begin from 0 (ground floor) and can be negative.

.. platform-code::

    .. code-block:: java
        :class: platform platform-android

        int origin_easting = 123456;
        int origin_northing = 123456;
        int origin_floor = 0;

        int destination_easting = 234567;
        int destination_northing = 234567;
        int destination_floor = 0;

        LivingMapSDKManager.sharedInstance().getMapfragment().requestRoute(
            origin_easting,
            origin_northing,
            origin_floor,
            destination_easting,
            destination_northing,
            destination_floor
        );

    .. code-block:: swift
        :class: platform platform-ios

        var origin_easting = 123456
        var origin_northing = 123456
        var origin_floor = 0

        var destination_easting = 234567
        var destination_northing = 234567
        var destination_floor = 0

        LivingMapSDKManager.sharedInstance.getLivingMapComponent()?.requestRoute(
            fromEasting: origin_easting,
            fromNorthing: origin_northing,
            fromFloor: origin_floor,
            toEasting: destination_easting,
            toNorthing: destination_northing,
            toFloor: destination_floor
        )


Routing from Current Location
-----------------------------

To route from the current location, register to receive location updates using the ``onMapReady()`` :doc:`Event Handler </mapping/event-handling>` method, and store the location object within the class. These location values are then used as the origin.

.. platform-code::

    .. code-block:: java
        :class: platform platform-android

        LivingMapLocation livingMapLocation;

        LivingMapEvents eventHandler = new LivingMapEvents() {
            @Override
            public void mapReady() {
                LivingMapSDKManager.sharedInstance().requestLocationSubscription(new LivingMapLocationListener() {
                    @Override
                    public void locationReceived(LivingMapLocation location) {
                        livingMapLocation = location;
                    }
                });
            }
        }

    .. code-block:: swift
        :class: platform platform-ios

        var livingMapLocation: LivingMapLocation?;

        func locationReceived(location: LivingMapLocation) {
            self.livingMapLocation = location
        }



When a route is required, retrieve the origin values from the *LivingMapLocation* object (i.e. the device's current location) and pass in destination values to be used for calculating the route.

.. platform-code::

    .. code-block:: java
        :class: platform platform-android

        int destination_easting = 234567;
        int destination_northing = 234567;
        int destination_floor = 0;

        LivingMapSDKManager.sharedInstance().getMapfragment().requestRoute(
            livingmapLocation.getEasting(),
            livingmapLocation.getNorthing(),
            livingmapLocation.getFloor(),
            destination_easting,
            destination_northing,
            destination_floor
        );

    .. code-block:: swift
        :class: platform platform-ios

        var destination_easting = 234567
        var destination_northing = 234567
        var destination_floor = 0

        LivingMapSDKManager.sharedInstance.getLivingMapComponent()?.requestRoute(
            fromEasting: livingMapLocation!.easting,
            fromNorthing: livingMapLocation!.northing,
            fromFloor: livingMapLocation!.floor,
            toEasting: destination_easting,
            toNorthing: destination_northing,
            toFloor: destination_floor
        )