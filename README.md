# Unit 15 Homework: Visualizing Data with Leaflet

## Background

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment, and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes. As a new hire, you will be helping them out with an exciting new project!

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualize their data will allow them to better educate the public and other government organizations (and hopefully secure more funding) on issues facing our planet.

## Before You Begin

1. Create a new repository for this project called `leaflet-challenge`. **Do not add this homework to an existing repository**.

2. Clone the new repository to your computer.

3. Inside your local git repository, create a directory for the Leaflet challenge. Use the folder names to correspond to the challenges: **Leaflet-Part-1** and **Leaflet-Part-2**.

4. This homework uses both **HTML** and **JavaScript**, so be sure to add all the necessary files. These will be the main files to run for analysis.

5. Push the above changes to GitHub.

## Instructions

The instructions for this activity are broken into two parts: 

* Part 1: Create the Earthquake Visualization 

* Part 2: Gather and Plot More Data (Optional)

### Part 1: Create the Earthquake Visualization

![2-BasicMap](Images/2-BasicMap.png)

Your first task is to visualize an earthquake dataset. Complete the following steps:

1. Get your dataset. To do so, follow these steps: 

   * The USGS provides earthquake data in a number of different formats, updated every five minutes. Visit the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page and choose a dataset to visualize. The following image is an example screenshot of what appears when you visit this link:

   ![3-Data](Images/3-Data.png)

    * When you click a dataset (such as "All Earthquakes from the Past 7 Days"), you will be given a JSON representation of that data. Use the URL of this JSON to pull in the data for the visualization. The following image is a sampling of earthquake data in JSON format:

   ![4-JSON](Images/4-JSON.png)

2. Import and visualize the data by doing the following: 

   * Using Leaflet, create a map that plots all the earthquakes from your dataset based on their longitude and latitude.

       *  Your data markers should reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. Earthquakes with higher magnitudes should appear larger, and earthquakes with greater depth should appear darker in color.

       * **Hint:** The depth of the earth can be found as the third coordinate for each earthquake.

   * Include popups that provide additional information about the earthquake when its associated marker is clicked.

   * Create a legend that will provide context for your map data.

   * Your visualization should look something like the preceding map.

- - -

### Part 2: Gather and Plot More Data (Optional)

The USGS wants you to plot a second dataset on your map to illustrate the relationship between tectonic plates and seismic activity. So, you will need to pull in this dataset and visualize it alongside your original data. Data on tectonic plates can be found at <https://github.com/fraxen/tectonicplates>.

The following image is an example screenshot of what the USGS would like you to produce:

![5-Advanced](Images/5-Advanced.png)

Perform the following tasks: 

* Plot the tectonic plates dataset on the map in addition to the earthquakes.

* Add other base maps to choose from.

* Put each dataset into separate overlays that can be turned on and off independently.

* Add layer controls to our map.

## Rubric

[Unit 15 Homework Rubric](https://docs.google.com/document/d/1kDNeT4a54ik_AZrHYN3LmVMqH0hDuiwbK2h5lHNxumQ/edit?usp=sharing)

___
© 2022 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
