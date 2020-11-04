import React from 'react';
import Link from 'next/link';

function AllPosts() {
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
      const linkToListOfDirectories = listOfDirectores.filter(element => {
        const links = element.split('pages/');
        if (links.length > 1) {
          return links[1];
        }
      });
      return listOfDirectores;
    }



    module.exports = getDirectoriesRecursive('./pages');` || [];

  return (
    <div>
      React function with all posts
      {postFileNamesTemp.map((linksNames) => {
        const links = linksNames.split('pages/');
        // console.log(links);
        if (links.length > 1) {
          return (
            <Link href={links[1]} key={links[1]}>
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
