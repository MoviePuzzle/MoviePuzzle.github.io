---
layout: project
project: PatchGenCN
title: >
    Patchwise Generative ConvNet: Training Energy-Based Models from a Single Natural Image for Internal Learning
permalink: /PatchGenCN/
thumbnail: PatchGenCN/images/paper_thumbnail.png
paper: PatchGenCN/CVPR21_PatchGenCN.pdf
bibtex: >
    @inproceedings{zheng2021patchgencn,
        title={Patchwise Generative ConvNet: Training Energy-Based Models from a Single Natural Image for Internal Learning},
        author={Zheng, Zilong and Xie, Jianwen and Li, Ping},
        booktitle={Proceedings of the IEEE conference on computer vision and pattern recognition (CVPR)},
        year={2021}
    }
---

<div class="project_info">
<span><a href="https://zilongzheng.github.io" class="active" >Zilong Zheng</a> <sup>1</sup></span>  
<span><a href="http://www.stat.ucla.edu/~jxie/">Jianwen Xie</a> <sup>2</sup></span>  
<span><a href="http://research.baidu.com/People/index-view?id=111">Ping Li</a> <sup>2</sup></span>
</div>

<div class="project_info">
<span><sup>1</sup> Center for Vision, Cognition, Learning, and Autonomy (VCLA)</span> <br>
<span><sup>2</sup> Cognitive Computing Lab, Baidu Research, USA</span>
</div>
<div class="project_info">
In CVPR 2021 <span class="award">(Oral)</span>
</div>

<div class="figure">
<img src="/images/image_syn.png" alt="image synthesis" width="100%">
</div>


## Abstract

<p class="text-justify">
Exploiting internal statistics of a single natural image has long been recognized as a significant research paradigm where the goal is to learn the internal distribution of patches within the image without relying on external training data. Different from prior works that model such a distribution implicitly with a top-down latent variable model (<em>e.g.</em>, generator), this paper proposes to <em>explicitly</em> represent the statistical distribution within a single natural image by using an energy-based generative framework, where a pyramid of energy functions, each parameterized by a bottom-up deep neural network, are used to capture the distributions of patches at different resolutions. Meanwhile, a coarse-to-fine sequential training and sampling strategy is presented to train the model efficiently. Besides learning to generate random samples from white noise, the model can learn in parallel with a self-supervised task (<em>e.g.</em>, recover the input image from its corrupted version), which can further improve the descriptive power of the learned model. The proposed model is simple and natural in that it does not require an auxiliary model (<em>e.g.</em>, discriminator) to assist the training. Besides, it also unifies internal statistics learning and image generation in a single framework. Experimental results presented on various image generation and manipulation tasks, including super-resolution, image editing, harmonization, style transfer, <em>etc.</em>, have demonstrated the effectiveness of our model for internal learning.
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

<p class="text-justify">Zilong Zheng, Jianwen Xie, Ping Li. "Patchwise Generative ConvNet: Training Energy-Based Models from a Single Natural Image for Internal Learning", in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2021.</p>

<a role="button" data-toggle="modal" data-target="#bibtex-modal">BibTex</a>
</div>
</div>
</div>



## Methodology



### Multi-Scale Modeling

<div class="figure">
<img src="/images/ms_model.png" alt="ms model" width="70%">
<span>Figure 1. Multi-Scale EBM modeling.</span>
</div>

Let $$\{\mathbf{I}(s), s = 0, ..., S\}$$ denote the multi-scale versions of a training image $$\mathbf{I}$$, with $$s$$ indexing the scale, the multi-scale EBM (Figure 1) is modeled as

$$p_\theta(\mathbf{I}^{(s)}) = \frac{1}{Z(\theta_s)} \exp(f_\theta(\mathbf{I}^{(s)})),$$

where $$f_\theta$$ is an energy network, $$Z(\theta)=\int \exp (f_\theta(\mathbf{I})) d \mathbf{I}$$ is a normalization constant.



### Multi-Scale Sequential Sampling

<div class="figure">
<img src="/images/ms_sample.png" alt="ms sample" width="70%">
<span>Figure 2. Multi-Scale sequential sampling process.</span>
</div>

The mutli-scale sequential sampling (Figure 2) can be represented as: for $$s=0,...,S$$,

$$\tilde{\mathbf{I}}^{(s)}_0=
\begin{cases}
Z \sim \mathcal{U}_{d}((-1, 1)^{d}) & s=0\\
\text{Upsample}(\tilde{\mathbf{I}}^{(s-1)}_{K^{(s-1)}})& s > 0
\end{cases} $$

$$\tilde{\mathbf{I}}^{(s)}_{t+1}= \tilde{\mathbf{I}}^{(s)}_{t} + \frac{\delta^2}{2} \frac{\partial}{\partial \mathbf{I}^{(s)}} f_{\theta_{s}} (\tilde{\mathbf{I}}^{(s)}_{t}) + \delta\epsilon^{(s)}_{t}, $$

where $$t=0,...,K^{(s)} - 1$$ indexes the timestep, $$\mathcal{U}_{d}((-1, 1)^{d})$$ the uniform distribution, $$\delta$$ the Langvein step size, $$\epsilon_t \sim \mathcal{N}(0, I)$$ a Gaussian noise.


## Related Work
1. Jianwen Xie\*, Zilong Zheng\*, Xiaolin Fang, Song-Chun Zhu, Ying Nian Wu. "Cooperative Training of Fast Thinking Initializer and Slow Thinking Solver for Conditional Learning." TPAMI, 2021.
2. Jianwen Xie\*, Zilong Zheng\*, Ruiqi Gao, Wenguan Wang, Song-Chun Zhu, Ying Nian Wu. "Generative VoxelNet: Learning Energy-Based Models for 3D Shape Synthesis and Analysis." TPAMI, 2020.
3. Ruiqi Gao\*, Ying Lu\*, Junpei Zhou, Song-Chun Zhu, Ying Nian Wu. "Learning Generative ConvNets via Multi-grid Modeling and Sampling." In CVPR, 2018.
4. Jianwen Xie, Yang Lu, Ruiqi Gao, Song-Chun Zhu, Ying Nian Wu. "Cooperative Training of Descriptor and Generator Networks." TPAMI, 2018.

<br>

## Acknowledgement
We thank Yang Zhao for helpful discussions, and Yifan Zhang for creating initial image manipulation inputs.