/*

In this kata we are going to mimic a software versioning system.

You have to implement a vm function returning an object.

It should accept an optional parameter that represents the initial version. The input will be in one of the following formats: "{MAJOR}", "{MAJOR}.{MINOR}", or "{MAJOR}.{MINOR}.{PATCH}". More values may be provided after PATCH but they should be ignored. If these 3 parts are not decimal values, an exception with the message "Error occured while parsing version!" should be thrown. If the initial version is not provided or is an empty string, use "0.0.1" by default.

This class should support the following methods, all of which should be chainable (except release):

major() - increase MAJOR by 1, set MINOR and PATCH to 0
minor() - increase MINOR by 1, set PATCH to 0
patch() - increase PATCH by 1
rollback() - return the MAJOR, MINOR, and PATCH to their values before the previous major/minor/patch call, or throw an exception with the message "Cannot rollback!" if there's no version to roll back to. Multiple calls to rollback() should be possible and restore the version history
release() - return a string in the format "{MAJOR}.{MINOR}.{PATCH}"
May the binary force be with you!

*/

// solution

function vm(version = "0.0.1") {
  function parsePart(part) {
    if (part === undefined) {
      return undefined;
    }

    const value = parseInt(part, 10);
    if (isNaN(value)) {
      throw new Error("Error occured while parsing version!");
    }
    return value;
  }

  if (version.length === 0) {
    version = "0.0.1";
  }

  const parts = version.split(".");
  const major = parsePart(parts[0]);
  const minor = parsePart(parts[1]);
  const patch = parsePart(parts[2]);

  return new Version(major, minor, patch);
}

class Version {
  constructor(major = 0, minor = 0, patch = 0) {
    this._history = [];
    this._major = major;
    this._minor = minor;
    this._patch = patch;
  }

  _save() {
    this._history.push({
      major: this._major,
      minor: this._minor,
      patch: this._patch,
    });
  }

  major() {
    this._save();
    this._major += 1;
    this._minor = 0;
    this._patch = 0;
    return this;
  }

  minor() {
    this._save();
    this._minor += 1;
    this._patch = 0;
    return this;
  }

  patch() {
    this._save();
    this._patch += 1;
    return this;
  }

  rollback() {
    const value = this._history.pop();
    if (value === undefined) {
      throw new Error("Cannot rollback!");
    }

    this._major = value.major;
    this._minor = value.minor;
    this._patch = value.patch;

    return this;
  }

  release() {
    return `${this._major}.${this._minor}.${this._patch}`;
  }
}
