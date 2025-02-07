---
layout: article
title: Annotation Studio
date: 2019-09-25 11:06 -0400
category: Projects
author: 
image:
  teaser: annotation.jpg
---
![annotation.jpg](/images/renovating.jpg)
Annotation Studio is an open source web application that engages students in close reading and textual interpretation. It integrates a powerful set of tools with an interface that makes using those tools intuitive for undergraduates. Building on students’ new media literacies, Annotation Studio develops traditional humanistic skills including close reading, persuasive writing, and critical thinking. Features of the initial Annotation Studio implementation, supported by an NEH Start-Up Grant, include aligned multi-media annotation of written texts, user-defined sharing of annotations, and grouping of annotations by self-defined tags to support interpretation and argument development. By enabling the user to tag texts using folksonomies rather than TEI, Annotation Studio allows students to act as “novice scholars,” discovering how literary texts can be opened up through the exploration of sources, influences, editions, and adaptations. In other words, Annotation Studio’s tools and workspaces help students hone skills used by professional humanists.

Annotation Studio offers a unique combination of easy-to-use features:

Multimedia Annotations – Students can link images, video, and audio to texts.
Multi-textual annotation – Annotations can be linked to multiple texts, allowing students to connect a single comment to an original document and its adaptation.
Social Annotation – Students can share their comments with individual students, small workgroups, or the whole class.
Collections – Faculty and students can create collections of texts.
Advanced Search – Users have multiple filtering mechanisms for texts, tags, and annotations.
Tagging – Students can create and add tags to annotations, creating folksonomies.
Technical Description
Annotation Studio currently consists of two components: a web application written in Ruby on Rails and Backbone.js, to manage media documents, users and groups, and a RESTful web API written in Node.js and MongoDB, to store users’ annotations and to enable reuse, visualization, and analysis of those annotations.

Project site: annotationstudio.org

White Paper (NEH Start-up Grant – 2013): Annotation Studio: Bringing a time-honored learning practice into the digital age
White Paper (NEH Implementation Grant – 2016): Annotation Studio White Paper 2016

Future Development:

Support for importing new texts from formats such as PDF, RTF, and TEI in addition to HTML.
Fine-grained annotation of images, video, and audio.
Document juxtaposition to include image, video, and audio documents plus annotation across documents.
Visualizations of reader interactions that facilitate navigation and interpretation.
Export of annotations through APIs using W3C’s Open Annotation format.
Use of exported annotations in a visual light table as basis for argument construction and essay writing.
 