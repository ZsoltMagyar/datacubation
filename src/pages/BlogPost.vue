<template>
  <div>
    <PageHeader title="Blog"></PageHeader>

    <div id="blog-post-title">
      <h2>Blogbejegyzés címe</h2>
    </div>

    <section>
      <article id="blog-post-content">

        <img src="https://via.placeholder.com/750x450" alt="">
        <p id="read-time">Olvasási idő: <span>12456 perc</span></p>
        <p id="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in semper semper placerat id mus. Id ridiculus dui amet libero duis egestas. Euismod volutpat dui non placerat turpis diam. Magna nec nec nunc pharetra tortor. Tellus massa mollis nulla ut etiam eget tellus. Sem aliquam sed ut justo felis nisl porttitor aliquam.
          Nulla amet, semper enim enim. Sem semper nibh pellentesque congue mauris. Nisl, quis faucibus nisl ullamcorper convallis sollicitudin. Fusce egestas praesent at aliquam. In feugiat elementum diam pulvinar volutpat fringilla natoque dui ipsum. Sapien elementum enim aliquam vivamus tellus id. Massa fringilla purus nunc ornare. Enim, purus nec massa tortor.
          Duis dolor vel et, quam enim ultrices id dolor. Neque diam proin scelerisque eu eu scelerisque rutrum. Turpis convallis faucibus et sagittis non. Ultricies et at at pharetra, neque porttitor fermentum. Maecenas orci elementum neque duis. In cursus tortor sit bibendum sit consequat donec. Tristique ornare arcu mi interdum tempus scelerisque. Nisl scelerisque etiam nullam sollicitudin morbi. In a, urna auctor dictum. Non arcu lacus maecenas quam id nisl, faucibus arcu. Pharetra est dignissim ligula commodo orci ante. Nec felis quam risus urna in lorem tortor. Varius mattis urna feugiat netus.
          Pellentesque iaculis magna est mi. Neque orci elementum, nisl, ac eu bibendum malesuada. Ullamcorper integer amet sit arcu, ultrices tincidunt fringilla pellentesque in. Massa in scelerisque neque, lectus. Turpis etiam mattis varius at sed faucibus netus lectus. Ut commodo, facilisis eu semper non cursus bibendum. Faucibus mauris arcu, non scelerisque laoreet mi sem donec.
          Sapien id mi, aliquam morbi nisl laoreet massa. Neque lobortis nibh laoreet viverra. Lorem donec nisl eu imperdiet curabitur tellus lacus. Convallis dignissim eu, odio ornare eu, viverra suscipit. Fringilla orci commodo fringilla sed in enim, nisl risus. Non ut phasellus fames ipsum. Proin leo amet cursus orci.
          Sed penatibus vehicula in nec vitae ipsum quam. Elementum massa neque semper vulputate ipsum mattis posuere morbi posuere. Nunc consequat, morbi luctus a. Posuere augue risus blandit penatibus. Egestas at donec eleifend adipiscing tincidunt faucibus elementum diam massa. Nulla phasellus quam in amet. Velit at egestas tincidunt sem pellentesque purus hac mattis. Eu aliquam ullamcorper venenatis ac phasellus in. In aliquet nunc dolor convallis blandit tortor lorem. Aliquam aliquam mollis id non sed tincidunt condimentum. Massa dui in lacus cursus nunc. Massa, consequat, arcu in consectetur morbi. Enim est aliquam purus, odio erat nulla nunc. Non donec ultricies adipiscing ultricies eget.
          Nisi massa nisl eu nibh. Velit neque, aliquam, dui, tempus. Leo non lectus morbi habitant a etiam. Et pretium, tellus ultrices tincidunt pellentesque purus. Feugiat fringilla sit consequat lacus eros, erat justo, volutpat. Massa dignissim neque, auctor nullam. Eget consequat in lorem ut in a pellentesque massa cursus. Blandit euismod in placerat hendrerit magnis. Vitae, lobortis enim risus nullam a tincidunt ridiculus. Accumsan sagittis ut neque metus, nunc. Cursus massa id senectus tempus eleifend enim eget tincidunt. Elit fringilla cras mollis bibendum.
          Adipiscing vel adipiscing volutpat massa, risus. Eu venenatis donec nibh maecenas lorem sagittis, eget. Morbi etiam suspendisse nunc magnis nisi nulla felis consectetur. Tempus, gravida velit sodales dolor urna euismod placerat scelerisque porta. Pellentesque elementum et ultrices amet fermentum posuere iaculis. Aliquet feugiat eget pellentesque viverra diam. Ornare id id tortor nunc, et. Turpis etiam orci, odio malesuada at mollis donec vel in. Est et lobortis sit eu mauris. Euismod elit, nullam enim varius at posuere cras quis. In ornare cras ut nam cursus urna ultrices ac ligula.
          Imperdiet lectus et tellus consectetur cursus lorem. Massa bibendum sit sit.</p>

      </article>

      <aside>
        <div>
          <div class="orange-circle-with-icon orange-circle-with-icon--medium">
            <i class="las la-envelope"></i>
          </div>
        </div>
        <div>
          <div id="mail-list">
            <button class="btn btn-orange">Feliratkozom a hírlevélre</button>
          </div>
          <div id="last-posts">
            <h3 class="blue-underline--thin">Legutóbbi bejegyzések</h3>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
          </div>
        </div>
      </aside>
    </section>

  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
export default {
  name: "BlogPost",
  components: {
    PageHeader
  }
}
</script>

<style scoped lang="scss">

#blog-post-title {
  width: 100%;
  height: 120px;
  border-bottom: 4px solid #A2CFD1;
  margin-bottom: 110px;

  display: flex;
  justify-content: center;
  align-items: center;
}

section {
  margin-bottom: 100px;
  display: flex;
  justify-content: center;

  article {
    text-align: left;
    width: 750px;
    margin-right: 90px;

    #read-time {
      margin-top: 16px;
      font-weight: 600;
      font-size: 18px;
      line-height: 34px;
      color: #2E91A6;

      span {
        color: #707070;
      }
    }

    #text {
      margin-top: 40px;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      color: #707070;
    }
  }

  aside {
    display: flex;

    > div:first-child {
      margin-right: 35px;
    }

    div:last-child {

      #mail-list {
      }

      #last-posts {
        width: 300px;
        margin-top: 50px;

        div {
          padding: 24px 0;

          text-align: left;
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
          color: #707070;

          border-bottom: 1px solid #707070;;
        }
      }
    }
  }
}

</style>
