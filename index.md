---
layout: archive
permalink: /
---

<div class="row">
	<div class="left">
		<img src="../images/teaser.png" alt="teaser" itemprop="image" style="width: 100%;">
		<p>Active Archives Initiative：Advancing Digital archives as platforms for creative engagement.</p>
	</div>

	<div class="right">

		{% for post in site.posts %}
	{% include news-grid.html %}
	{% endfor %}
	</div>
</div><!--row-->

<!--how to add a line over here-->


<div class="tiles" >
{% for post in site.posts %}
	{% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->


<style>
.branding{
	padding-bottom: 5px;
}

.row {
	width:100%;
	padding-bottom: 10px;
}

.left {
	float: left;
	display: inline-block;
	width: 49%
	
}

.right {
	float: right;
	display: inline-block;
	width: 49%;	
}

 


</style>