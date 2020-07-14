Styling the Map
===============

.. contents::
    :depth: 2
    :local:


Accessibility
-------------

The *Map Component* supports alternative map styles to aid accessibility. The style can be changed dynamically at runtime by passing one of the ``MapStyles`` constants to the ``setMapStyle()`` method on the map control.

.. caution::
    The following should only be called once the map is ready by using the :doc:`Event Handler </mapping/event-handling>`


.. platform-code::

    .. code-block:: java
        :class: platform platform-android

        LivingMapEvents eventHandler = new LivingMapEvents() {

            /**
             * Called when the map object has finished loading
             */
            @Override
            public void mapReady() {
                LivingMapSDKManager.sharedInstance().getMapFragment().setMapStyle(
                    LivingMapConstants.MapStyles.HIGH_CONTRAST
                );
            }

        }

    .. code-block:: swift
        :class: platform platform-ios

        class MapViewController: UIViewController, LivingMapEvents {

            /**
             * Called when the map object has finished loading
             */
            func mapReady() {
                LivingMapSDKManager.sharedInstance.getLivingMapFragment()?.setMapStyle(
                    LivingMapConstants.MapStyles.HIGH_CONTRAST
                )
            }

        }


Supported map styles are:

+------------------------+--------------------------------------------------------+
| Default                | ``LivingMapConstants.MapStyles.DEFAULT``               |
+------------------------+--------------------------------------------------------+
| Autism                 | ``LivingMapConstants.MapStyles.AUTISM``                |
+------------------------+--------------------------------------------------------+
| Dyslexia               | ``LivingMapConstants.MapStyles.DYSLEXIA``              |
+------------------------+--------------------------------------------------------+
| High-contrast          | ``LivingMapConstants.MapStyles.HIGH_CONTRAST``         |
+------------------------+--------------------------------------------------------+
| High-contrast 1.25x    | ``LivingMapConstants.MapStyles.HIGH_CONTRAST_1_25x``   |
+------------------------+--------------------------------------------------------+
| High-contrast 1.5x     | ``LivingMapConstants.MapStyles.HIGH_CONTRAST_1_5x``    |
+------------------------+--------------------------------------------------------+

