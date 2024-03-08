<template>
  <div class="row justify-content-center">
    <div class="col-lg-10">
      <div class="accordion accordion-flush" id="accordionExample">
        <div class="accordion-item mb-1" data-aos="fade-up" data-aos-once="true">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              <div class="d-flex flex-column align-items-start">
                <h4 class="fs-4 mb-0">餐廳是否有提供訂位服務？</h4>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body ps-0 pe-4 pb-0 pt-2 pt-lg-4">
                    <p>訂位請洽：02-2345678，由專人為您服務</p>
                  </div>
                </div>
              </div>
            </button>
          </h2>
        </div>
        <div
          class="accordion-item mb-1"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="200"
        >
          <h2 class="accordion-header" id="heading2">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse2"
              aria-expanded="false"
              aria-controls="collapse2"
            >
              <div class="d-flex flex-column align-items-start">
                <h4 class="fs-4 mb-0">店內消費有提供刷卡服務嗎？</h4>
                <div
                  id="collapse2"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body ps-0 pe-4 pb-0 pt-2 pt-lg-4">
                    <p class="text-gray-dark lh-base">我們接受現金及所有常見的信用卡支付</p>
                  </div>
                </div>
              </div>
            </button>
          </h2>
        </div>
        <div
          class="accordion-item mb-1"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="300"
        >
          <h2 class="accordion-header" id="heading3">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse3"
              aria-expanded="false"
              aria-controls="collapse3"
            >
              <div class="d-flex flex-column align-items-start">
                <h4 class="fs-4 mb-0">當月壽星有沒有什麼優惠?</h4>
                <div
                  id="collapse3"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body ps-0 pe-4 pb-0 pt-2 pt-lg-4">
                    <p class="text-gray-dark lh-base">當月壽星訂餐可享九折優惠一次</p>
                  </div>
                </div>
              </div>
            </button>
          </h2>
        </div>
        <div
          class="accordion-item mb-1"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="400"
        >
          <h2 class="accordion-header" id="heading2">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse4"
              aria-expanded="false"
              aria-controls="collapse"
            >
              <div class="d-flex flex-column align-items-start">
                <h4 class="fs-4 mb-0">餐廳內有提供兒童座椅嗎？</h4>
                <div
                  id="collapse4"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body ps-0 pe-4 pb-0 pt-2 pt-lg-4">
                    <p class="text-gray-dark lh-base">
                      可以在訂位時備註，或告知我們的服務人員，我們將於用餐日準備兒童座椅給各位貴賓。
                    </p>
                  </div>
                </div>
              </div>
            </button>
          </h2>
        </div>
        <div
          class="accordion-item mb-1"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="500"
        >
          <h2 class="accordion-header" id="heading2">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse5"
              aria-expanded="false"
              aria-controls="collapse2"
            >
              <div class="d-flex flex-column align-items-start">
                <h4 class="fs-4 mb-0">可以攜帶寵物嗎？</h4>
                <div
                  id="collapse5"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body ps-0 pe-4 pb-0 pt-2 pt-lg-4">
                    <p class="text-gray-dark lh-base">
                      為維護其他貴賓用餐權益，除導盲犬外的寵物進入餐廳皆需自備使用寵物推車或寵物收容箱，並且需戴上狗嘴套（止吠套），於用餐期間不可落地或抱於胸前腿上用餐，同時無法指定用餐座位，並需依照餐廳指示始可進入餐廳，若因上述無法配合或造成其他顧客反應情況下，餐廳有權拒絕接待入內用餐，敬請見諒！
                    </p>
                  </div>
                </div>
              </div>
            </button>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.accordion-button {
  padding: 16px;
  &.collapsed:hover {
    background-color: #f4f5ec;
  }
}
.accordion-button:not(.collapsed) {
  background-color: #ffff;
  box-shadow: none;
  border: 2px solid #dfebe3;
}
.accordion-flush .accordion-item .accordion-button {
  border-radius: 8px;
}
.accordion-item {
  border: 0px solid transparent;
}
</style>
