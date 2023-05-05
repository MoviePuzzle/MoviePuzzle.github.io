---
layout: project
project: MoviePuzzle
title: >
    MoviePuzzle: Visual Narrative Reasoning through Multimodal Order Learning
permalink: /
thumbnail: images/paper_thumbnail.png
paper: MoviePuzzle.pdf
bibtex: >
    # TODO replace with your own bib file
    @inproceedings{wang2023moviepuzzle,
        title={MoviePuzzle: Visual Narrative Reasoning through Multimodal Order Learning},
        author={Jianghui Wang, Zilong and Xie, Jianwen and Li, Ping},
        booktitle={},
        year={2023}
    }
---

<script src="js/annimations.js?ver=20200601"></script>
<script src="js/responsive.js?ver=20200601"></script>
<script src="js/game.js?ver=20230403"></script>
<link rel="stylesheet" href="css/index.css?ver=20200601">
<link rel="stylesheet" href="css/game.css?ver=20230403">
<link href="https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel="stylesheet">
<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<script src="https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>

<div class="project_info">
<span><a href="http://www.stat.ucla.edu/~jxie/">Jianghui Wang</a> <sup>1</sup></span>  
<span><a href="http://research.baidu.com/People/index-view?id=111">Yuxuan Wang</a> <sup>1 2</sup></span>
<span><a href="http://research.baidu.com/People/index-view?id=111">Dongyan Zhao</a> <sup>2</sup></span>
<span><a href="https://zilongzheng.github.io" class="active" >Zilong Zheng</a> <sup>1</sup></span>  
</div>


<div class="project_info">
<span><sup>1</sup> Beijing Institute for General Artificial Intelligence (BIGAI)</span> <br>
<span><sup>2</sup> Wangxuan Institute of Computer Technology, Peking University</span>
</div>
<div class="project_info">
ICCV 2023 Under Review
</div>


<h2>Abstract</h2>
<p class="text-justify">
We introduce MoviePuzzle, a novel challenge that targets visual narrative reasoning and holistic movie understanding. Despite the notable progress that has been witnessed in the realm of video understanding, most prior works fail to present tasks and models to address *holistic video understanding* and the innate *visual narrative structures* existing in long-form videos. To tackle this quandary, we put forth MoviePuzzle task that amplifies the temporal feature learning and structure learning of video models by reshuffling the shot, frame, and clip layers of movie segments in the presence of video-dialogue information.
We start by establishing a carefully refined dataset based on MovieNet by dissecting movies into hierarchical layers and randomly permuting the orders. 
Besides benchmarking the MoviePuzzle with prior arts on movie understanding, we devise a Hierarchical Contrastive Movie Clustering (HCMC) model that considers the underlying structure and visual semantic orders for movie reordering.
Specifically, through a pairwise and contrastive learning approach, we train models to predict the correct order of each layer. 
This equips them with the knack for deciphering the visual narrative structure of movies and handling the disorder lurking in video data.
Experiments show that our approach outperforms existing state-of-the-art methods on the MoviePuzzle benchmark, underscoring its efficacy. 
All the datasets and baseline codes will be publicly accessible.
</p>

<div class="section container">
    <div class="row">
        <div class="col-lg-3">
        <a href="{{ page.paper | prepend: '/projects/' | relative_url }}">
        <img class="paper" alt="paper thumbnail" src="/images/paper_thumbnail.png" width="170px">
        </a>
        </div>
<div class="col-lg-9">
<h2>Paper</h2>
<a href="https://openaccess.thecvf.com/content/CVPR2021/html/Zheng_Patchwise_Generative_ConvNet_Training_Energy-Based_Models_From_a_Single_Natural_CVPR_2021_paper.html">CVPR</a> | <a href="https://github.com/zilongzheng/PatchGenCN">Code</a> | <a role="button" data-toggle="modal" data-target="#bibtex-modal">Bibtex</a>.
    
<h3>Citation</h3>

<p class="text-justify">Jianghui Wang, Yuxuan Wang, Dongyan Zhao, Zilong Zheng. "MoviePuzzle: Visual Narrative Reasoning through Multimodal Order Learning"</p>

<a role="button" data-toggle="modal" data-target="#bibtex-modal">BibTex</a>
</div>
</div>
</div>

<h2>Download</h2>

<!-- game -->
<div class="game">
    <div class="body" class="img">
    <h2>Sort Movie Frames</h2>
    <div class="height"></div><br>
    <div class="content">
        <div id="imageListId"></div>
        <div id="outputDiv">
            <b>Output of ID's of images : </b>
            <input id="outputvalues" type="text" value="" />
        </div>
        <div id="actionDiv">
            <button id="nextBtn" onclick="JumpNext()" disabled>Next</button>
            <button id="submitBtn" onclick="Submit()" disabled>Submit</button>
        </div>    
    </div>
    </div>
</div>
