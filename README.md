---
layout: home
permalink: index.html

repository-name: e17-co328-ContactTracingApp
Title: CONTACT TRACING APP
---

[comment]: # "This is the standard layout for the project, but you can clean this and use your own template"

#  CONTACT TRACING APP

## Table of Contents
- [CONTACT TRACING APP](#CONTACT-TRACING-APP)
  - [Table of Contents](#table-of-contents)
  - [Problem Overview](#problem-overview)
  - [Proposed System](#solution-overview)
  - [Team](#team)
  - [Links](#links)

## Problem Overview
PROBLEMS RELATED WITH COVID-19 ( Communicable disease )

- Inefficiency to trace the close contacts of an infected person manually.
- Not being able to know whether you've been in contact with an infected person.
- Lack of options to know whether a public place was visited by an infected person recently.

PROBLEMS RELATED WITH Chronic Kidney Disease/CKDu  ( Non-Communicable)

- Lack of awareness
- Difficulty in manually sorting  data to identify the spreading rates and trends.
- No efficient way to identify disease spreading hotspots/areas by the general public .



As a solution, we are proposing to build  a contact tracing mobile application as well as a web application.
We are planing to use both bluetooth and GPS to track down the contacts of the infected person.

## Solution Overview

### COVID19

To trace the close contacts Bluetooth is used.


<img src = "docs/images/BLUE_OVERVIEW.png" width="600">


To track the whereabouts (History of the locations visited) of the infected person GPS is used.


<img src = "docs/images/gps_OVERVIEW.png" width="600">


Using this GPS data, a proper dataset is created. Then this data set will be processed using data mining and machine learning techniques to provide the users with HIGH RISK ZONES on a map , Future predictions of the spread of the disease.


### Chronic kidney disease

Data of the infected people are uploaded by the health officials.
This dataset is then subjected to data mining and using machine learning techniques,
users are alerted when they enter a high risk zone and predictions are made for the third party authorities so that necessary precautions can be made to minimize the spread.


<img src = "docs/images/ckduOVERVIEW.png" width="600">

## Solution Architecture

<img src = "docs/images/SolutionArchitecture.png" width="600">


## Data Flow

<img src = "docs/images/dataflow.png" width="600">

## Requirements

### Functional Requirements

System should be able to trace close contacts of an infected person.

#### Mobile application
   - Should get gps and bluetooth tracking permission 
   - Should be able to display covid 19 and CKDu updates.
   - Should send alert notifications when risk detected
   - Should be able to get covid status through the app

#### Web app 
   - Should allow authorities to track user details
   - Should allow public users to check covid 19 and ckdu updates.


### Non-Functional Requirements

#### Usability
- Responsive user friendly UI
    
#### Reliability
- Tracks user locations for every 15 seconds
  
#### Performance
- Realtime updates of maps and charts

    
## UML Class Diagram

<img src = "docs/images/UMLC.png" width="600">

## Use case Diagrams

### Mobile app

<img src = "docs/images/uc-app.png" width="600">

### Web app

<img src = "docs/images/uc-web.png" width="600">

## Machine Learning Proposal

### Communicable

- Based on the covid infection,recovery and death counts prediction in trends are made   (Forecast)
- Based on Geo-locations Hotspot identification and spreading rates are identified.
- Based on bluetooth data cluster formation and spread of the cluster is predicted.

### Non-Communicable

- Based on the infected , recovered and death counts of specific locations the trend in spread is predicted

## MACHINE LEARNING WORKFLOW


<img src = "docs/images/MLworkflow.png" width="600">
<img src = "docs/images/1.png" width="600">
<img src = "docs/images/2.png" width="600">
<img src = "docs/images/3.png" width="600">
<img src = "docs/images/ML model1.png" width="600">
<img src = "docs/images/Mlmodel2.png" width="600">
<img src = "docs/images/Ml model 3.png" width="600">
<img src = "docs/images/4.png" width="600">










---


## Team
-  E/17/005, M.I Rishard , [e17005@eng.pdn.ac.lk](mailto:name@email.com)
-  E/17/379, S.P.D.D.S WEERASINGHE [e17379@eng.pdn.ac.lk](mailto:name@email.com)
-  E/17/327, A.M.F SHALHA, [e17327@eng.pdn.ac.lk](mailto:name@email.com)



## Links
<!-- - [Project Page](https://cepdnaclk.github.io/e17-3yp) -->
- [Project Repository](https://github.com/cepdnaclk/e17-co328-ContactTracingApp)
- [Project Page](https://cepdnaclk.github.io/e17-co328-ContactTracingApp/)
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)


[//]: # (Please refer this to learn more about Markdown syntax)
[//]: # (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
