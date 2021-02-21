# ASTERGDEM_download_links
A list of all of the ASTERGDEM download links and wget command to retrieve them.

To download the data run `./download.sh EARTHDATA_USER EARTDATA_PASSWORD`
If you need to register for NASA EarthData goto: https://urs.earthdata.nasa.gov/users/new/

To properly cite the ASTERGDEM dataset see: https://lpdaac.usgs.gov/
I have nothing to do with the ASTERGDEM data. I made this list for my own and, hopefully, your convenience because finding these public data sets in bulk is quite difficult. They are typically hidden behind some kind of map chooser program that limits the amount of data you can access at once making it difficult to build your own applications on top of the full data set.

If the list of links should go stale as the ones in `__old_all_links.txt` already have then I recommend visiting https://e4ftl01.cr.usgs.gov . From there if the site is still up, look for the ASTT/ directory. that should eventually take you to  adirectory with ~60000 links in it for `.zip`, `.zip.xml`, and `.jpg` files. If you open you web browser console `Ctrl+K` in Firefox and `Ctrl+J` in Chrome and paste the code contained in `link_fetcher.js` it will generate a new list for you and prompt you to download it. Then simply modify the `download.sh` script to use your list after the `-i` flag.
