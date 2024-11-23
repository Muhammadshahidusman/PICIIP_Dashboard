# PICIIP Spatial Decision Support System (SDSS) Dashboard

## Overview

The **Spatial Decision Support System (SDSS)** for the **Punjab Intermediate Cities Improvement Investment Programme (PICIIP)** is a web-based dashboard developed to assist municipal corporations (MCs) in cities like **Sahiwal** and **Sialkot**. The system, funded by the **Asian Development Bank**, helps enhance urban planning and governance by enabling efficient land use approvals and ensuring compliance with zoning regulations.

The SDSS is built using **Python Django**, with geospatial data management tools such as **PostGIS** and **Leaflet.js/OpenLayers** for map visualization. The system automates key processes like **KML file parsing**, **land use conflict detection**, and **report generation** to streamline decision-making.

## Key Features

- **Interactive Map Interface:** Visualize zoning, proposed zones, and land use classifications, with real-time data layers.
- **KML File Upload & Parsing:** Supports uploading of land use proposals in KML format for boundary submission and analysis.
- **Spatial Analysis Tools:** Detects conflicts between proposed land uses and existing master plans, ensuring compliance with building regulations.
- **Report Generation:** Automates the creation of reports summarizing compliance status and offering detailed recommendations.

## Purpose

The main purpose of this project is to:
- Provide **municipal officers and urban planners** with an intuitive interface to evaluate land use proposals and their compliance with local zoning laws and building regulations.
- Improve **urban governance** and **decision-making efficiency** for MCs in Sahiwal and Sialkot.
- Ensure that urban development aligns with **sustainable city planning** goals, using advanced spatial analysis techniques.

## Technology Stack

- **Backend:** Python Django
- **Frontend:** JavaScript (Leaflet.js/OpenLayers for interactive map features)
- **Geospatial Data Management:** PostGIS (PostgreSQL)
- **Data Parsing:** KML File Handling
- **Deployment:** Docker (optional, if used for containerization)

## Installation

### Prerequisites

- Python 3.8+
- PostgreSQL with PostGIS extension
- Django 4.x
- Other Python packages as listed in `requirements.txt`

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Muhammadshahidusman/PICIIP_SWL-.git
