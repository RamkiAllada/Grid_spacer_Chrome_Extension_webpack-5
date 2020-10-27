const columnChecker = {
  init() {
    this.toggleOverlay();
    this.bindEventlistenrs();
  },
  toggleOverlay() {
    const div = document.createElement('div');
    div.classList.add('wg-overlay');
    const toolBarBody = document.createElement('div');
    toolBarBody.classList.add('wg-toolbar');
    if ($('body').find('.wg-overlay').length > 0) {
      $('body').find('.wg-overlay').remove();
      $('body').find('.wg-toolbar').remove();
    } else {
      toolBarBody.appendChild(this.renderToolbar());
      $('body').append(div);
      $('body').append(toolBarBody);
    }
  },
  renderToolbar() {
    const toolbar = document.createElement('div');
    toolbar.classList.add('container-fluid');
    toolbar.classList.add('wg-overlay__toolbar');
    $(toolbar).append(this.toolBarBody());
    return toolbar;
  },
  bindEventlistenrs() {
    const that = this;
    $(document).on('click', '#wg-toolbar-Btn', () => {
      that.renderGrid();
    });
  },
  toolBarBody() {
    return `
      <div class="tool-bar__wrapper">
          <form class="form-inline container m-auto tool-bar__form">
              <div class="form-group">
                  <label for="inlineFormLeft">Left</label>
                  <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormLeft" placeholder="100">
              </div>
              <div class="form-group">
                  <label for="inlineFormRight">Right</label>
                  <input type="text" class="form-control mb-2 mr-sm-2" id="inlineFormRight" placeholder="100">
              </div>
              <button type="button" class="btn btn-primary mb-2" id="wg-toolbar-Btn">Submit</button>
      </form>
      </div>
    `;
  },
  renderGrid() {
    const gridWrapper = document.createElement('div');
    gridWrapper.classList.add('container-fluid');
    gridWrapper.classList.add('wg-overlay__container');
    const gridRow = document.createElement('div');
    gridRow.classList.add('row');
    for (let i = 0; i < 12; i += 1) {
      const gridChild = $('<div class="col-xs-1"><div class="col-content"></div></div>');
      $(gridRow).append(gridChild);
    }
    $(gridWrapper).append(gridRow);
    $('body').find('.wg-overlay').append(gridWrapper);
  },
};
export default columnChecker;
