---
layout: archive
permalink: /
---

<div class="row">
	<div class="left">
		
		
    

    {% for post in site.categories.Introduction limit:1%}
  <a href="{{ site.url }}{{ post.url }}" title="{{ post.title }}" class="post-teaser">
    {% if post.image.teaser %}
    <img src="{{ site.url }}/images/{{ post.image.teaser }}" alt="logo" itemprop="image" style="margin-bottom: 10px;">
    {% else %}
    <img src="{{ site.url }}/images/{{ site.teaser }}" alt="logo" itemprop="image">{% endif %}
  </a>
  <h2 class="post-title" itemprop="name">
    <a href="{{ site.url }}{{ post.url }}">{{ post.title }}</a>
  </h2>
  <p class="post-excerpt" itemprop="description">{{ post.excerpt | strip_html | truncate: 50 }}</p>
   {% endfor %}


	</div><!--left-->
	<div class="right">
		<p class="subtitle">News</p>
		<div class="row">
			<div class="left">
				{% include new-post-grid.html %}
			</div>
			<div class="right">
				{% include new-research-grid.html %}
			</div>
		</div><!--small row-->
	</div><!--right-->
</div><!--overall row-->

<!--page separation line-->
<div style="background-color:grey; height:0.5px; width:96%;"></div><br>

<!--titles for lower half-->
<div style="width: 100%">
	<div class="row">
		<div class="left66">
			<div class="left50">
				<p class="subtitle">Research</p>
			</div>
			<div class="right50">
				<p class="subtitle">Projects</p>
			</div>
		</div>
		<div calss="right33">
			<p class="subtitle">Subscribe</p>
		</div>
	</div>

</div>

<!--page lower half-->
<div class="row">
	<div class="left66">
		<div class="left50">
		{% include research-grid.html %}
		</div>
		<div class="right50">
		{% include projects-grid.html %}
		</div>
	</div>



<!--subscription and contact column-->
<div class="right33">
	<strong><p class="subtitle" id="subscribe">Active Archives Insight</p></strong>
	<p id="subscribe">Weekly newsletters, event notifications and more</p>
	<div class="row" id="subscribe">
		<div class="left66">
			<input type="text" name="email">
		</div>
		<div class="right33">
			<button id="subscriptionButton">Subscribe</button>
		</div>
		</div><!--row-->
		<!--line break-->
		<br>
		<div id="subscribe" style="background-color:grey; height:1px; width:100%"></div>

		<div class="row" id="subscribe">
		<div class="left30">
		<img src="images/MIT-logo-black-red-72x38.svg" style="padding-top:20%">
		</div>
		<div class="right70">
		<p>Active Archive Initiative is a part of: MIT School of Humanities, Arts and Social Sciences Comparative Media Studies</p>
		<strong><p class="subtitle">Contact</p></strong>
		<p>Massachusetts Institute of Technology, Bldg 16-635, 77 Massachusetts Ave., Cambridge, MA 02139, 617 258 6512</p>
		</div>
		</div><!--row-->
</div><!--right-->






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
	width: 45%
	
}

.right {
	margin-left: 4%;
	display: inline-block;
	width: 48%;	
}

.left66 {
	float: left;
	display: inline-block;
	width: 66%
	
}

.left33 {
	float: left;
	display: inline-block;
	width: 33%
	
}

.right33 {
	margin-left: 4%;
	display: inline-block;
	width: 30%;	
}

.left50{
	float: left;
	display: inline-block;
	width: 48%

}

.right50{
	margin-left: 4%;
	display: inline-block;
	width: 48%

}

.left30 {
	float: left;
	display: inline-block;
	width: 30%
	
}

.right70 {
	margin-left: 0%;
	display: inline-block;
	width: 70%;	
}


.subtitle {
	padding:0 0 0 0;
	margin: -3px 0 0 0;
	font-weight: bold;
	font-family: sans-serif;
}

#subscribe{
	margin-left: -13%;
}

 #subscriptionButton{
 	height: 40px;
 	border-radius: 5pt;
 	background-color: #FCCE02;
 	border-style: none;
 }


</style>