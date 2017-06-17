/**
 * LoadingModal for Ajax calls and such operations
 */
export default () =>
  <div className="modal is-active">
    <div className="modal-background" />
    <div className="modal-content has-text-centered">
      <div className="button is-danger is-bold is-loading is-medium" />
    </div>
    <button className="modal-close" />
  </div>;
