import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function AllPosts() {
  const [directories, setDirectories] = useState([]);

  const postFileNamesTemp =
    preval`
    const fs = require('fs')
    const path = require('path');

    function flatten(lists) {
      return lists.reduce((a, b) => a.concat(b), []);
    }

    function getDirectories(srcpath) {
      return fs.readdirSync(srcpath)
        .map(file => path.join(srcpath, file))
        .filter(path => fs.statSync(path).isDirectory());
    }

    function getDirectoriesRecursive(srcpath) {
      const listOfDirectores = [srcpath, ...flatten(getDirectories(srcpath).map(getDirectoriesRecursive))]
      const linkToListOfDirectories = listOfDirectores.forEach(element => {
        return element
      });
      return linkToListOfDirectories;
    }



    module.exports = getDirectoriesRecursive('./pages');` || [];

  console.log(postFileNamesTemp);

  return (
    <div>
      React function with all posts
      {postFileNamesTemp.map((linksNames) => {
        const links = linksNames.split('pages/');
        console.log(links);
        if (links.length > 1) {
          return (
            <Link href={links[1]}>
              <div>{links[1]}</div>
            </Link>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default AllPosts;
