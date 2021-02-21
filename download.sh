#!/bin/sh
#usage: ./download.sh NASA_EARTHDATA_USERNAME(EMAIL) NASA_EARTHDATA_PASSWORD
#to get an EarthData login goto: https://urs.earthdata.nasa.gov/users/new/
#to cite data properly see: https://lpdaac.usgs.gov/

#if the data has moved visit: https://e4ftl01.cr.usgs.gov and look for the ASTT/ directory
#^ to get a new set of links if the one here goes stale paste the link_fetcher.js code into your
#browser console. It will gather all relevant links and package them into a text file for download
wget -i all_links.txt --user=$1 --password=$2 --wait=2 --random-wait 
