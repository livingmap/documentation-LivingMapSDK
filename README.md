# LivingMapSDK Documentation

This repository contains the source files of the documentation for the [LivingMapSDK](https://docs.livingmap.com).

Content is coded in reStructuredText markup language (reST) and are parsed with the [Sphinx](https://www.sphinx-doc.org/) documentation builder. These documents are then publically hosted on [Read the Docs](https://readthedocs.org/).

## Contributing changes

**Pull Requests should use the `master` branch by default. Only make Pull Requests against other branches (e.g. `2.1` or `3.0`) if your changes only apply to that specific version of the respective SDK.**

Though arguably less convenient to edit than a wiki, this Git repository is meant to receive pull requests to always improve the documentation, add new pages, etc. Having direct access to the source files in a revision control system is a big plus to ensure the quality of our documentation.

### Editing existing pages

To edit an existing page, locate its .rst source file and open it in your favorite text editor. You can then commit the changes, push them to your fork and make a pull request.

### Adding new pages

To add a new page, create a .rst file with a meaningful name in the section you want to add a file to, e.g. `source/getting-started/introduction.rst`. Write its content like you would do for any other file, and make sure to define a reference name for Sphinx at the beginning of the file (check other files for the syntax), based on the file name with a "doc_" prefix (e.g. `.. _doc_introduction:`).

You should then add your page to the relevant "toctree" in `source/index.rst`.

### Sphinx and reStructuredText syntax

Check Sphinx's [reST Primer](https://www.sphinx-doc.org/en/master/usage/restructuredtext/index.html) for details on the syntax, or see how things are done in existing pages and adapt it to your needs.


## Building with Sphinx

To build the HTML website (or any other format supported by Sphinx, like PDF, EPUB or LaTeX), you need to install [Sphinx](https://www.sphinx-doc.org/) >= 3.1.

Instructions to install are available from the [Sphinx](https://www.sphinx-doc.org/en/master/usage/installation.html) website.

Once installed, you can then build the HTML documentation from the root folder of this repository with:

```sh
make html
```

You can then test the changes live by opening `_build/html/index.html` in your favorite browser.


## Deploying to https://docs.livingmap.com

Building and deployments to the [https://docs.livingmap.com](https://docs.livingmap.com) are carried out automatically via a CI/CD process. To deploy an update, simply have changes merged into an appropriate version branch or the `master` branch, then they will be automatically built and deployed within a few minutes. 

To monitor deployments, log into the [Read the Docs account](https://readthedocs.org/projects/).