Styling the Map
===============

.. contents::
    :depth: 2
    :local:


Accessibility
-------------

The *Map Fragment* supports alternative map styles to aid accessibility. The style can be changed dynamically at run time by passing one of the ``MapStyles`` constants to the ``setMapStyle()`` method on the map control.

.. caution::
    The following should only be called once the map is ready by using the :doc:`Event Handler </mapping/event-handling>`

.. code-block:: java

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

